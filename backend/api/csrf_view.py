from django.middleware.csrf import get_token
from django.http import JsonResponse


def get_csrf_token(request):
    """Endpoint para obter CSRF token"""
    token = get_token(request)
    return JsonResponse({'csrfToken': token})
