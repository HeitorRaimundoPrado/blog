from flask import Blueprint, current_app, request, jsonify
import jwt
from datetime import datetime, timedelta

auth_bp = Blueprint('auth', __name__)

def generate_token(user_id):
    payload = {
        'exp': datetime.utcnow() + timedelta(days=1),
        'iat': datetime.utcnow(),
        'sub': user_id
    }
    
    return jwt.encode(payload, current_app.config['SECRET_KEY'], algorithm="HS256")

def decode_token(token):
    try:
        payload = jwt.decode(token, current_app.config['SECRET_KEY'], algorithms=['HS256'])
        return payload['sub']

    except jwt.ExpiredSignatureError:
        return 'Token has expired, please login again'

    except jwt.InvalidTokenError:
        return 'Invalid token, please login again'


def hash_password(password: str):
    from app import bcrypt
    return bcrypt.generate_password_hash(password)

def check_password(password: str, hash: str):
    from app import bcrypt
    return bcrypt.check_password_hash(hash, password)

@auth_bp.route('/register', methods=["POST"])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'msg': 'Username and password are required'})

    from models import User
    print('username')
    print(username)
    print('password')
    print(password)

    existing_user = User.query.filter_by(username=username).first()
    print(existing_user)

    all_users = User.query.all();
    for user in all_users:
        print(user.username)

    if existing_user is not None:
        print(existing_user.username)
        return jsonify({'msg': 'Username already exists'}), 401

    hash = hash_password(password)
    new_user = User(username=username, password=hash)

    from __init__ import db
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'msg': 'User registered successfully'}), 201
    
@auth_bp.route('/login', methods=["POST"])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    from models import User

    user = User.query.filter_by(username=username).first()

    if user and check_password(password, user.password):
        token = generate_token(user.id)
        return jsonify({'token': token}), 200

    return {'msg': "Invalid credentials"}, 401
    
