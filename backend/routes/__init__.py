from flask import Blueprint

main_bp = Blueprint('main', __name__)

from .auth import auth_bp
from .admin import admin_bp

@main_bp.route('/test')
def test_route():
    return 'Returning from test', 200
