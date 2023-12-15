from flask import Blueprint, request
from .auth import jwt_required, getUser

admin_bp = Blueprint('admin', __name__, url_prefix="/admin")

@admin_bp.route('/authorized')
@jwt_required()
def admin_dashboard():
    user_id = getUser(request.headers.get('Authorization'))
    from models import User
    print("user_id: " + str(user_id))
    user = User.query.filter_by(id=user_id).first()
    if not user:
        return {'msg': 'Invalid Token'}, 401

    print(user.is_admin)
    if not user.is_admin:
        return {'msg': 'User is not admin'}, 401
    
    return {'msg': 'user is admin', 'is_admin': 1}, 200
