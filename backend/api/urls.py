from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    PersonalInfoViewSet, SummaryViewSet, ExperienceViewSet,
    SkillViewSet, ProjectViewSet, EducationViewSet,
    PersonalInterestViewSet, ProfessionalObjectiveViewSet
)

router = DefaultRouter()
router.register(r'personal-info', PersonalInfoViewSet, basename='personal-info')
router.register(r'summary', SummaryViewSet, basename='summary')
router.register(r'experiences', ExperienceViewSet, basename='experience')
router.register(r'skills', SkillViewSet, basename='skill')
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'education', EducationViewSet, basename='education')
router.register(r'personal-interests', PersonalInterestViewSet, basename='personal-interest')
router.register(r'professional-objectives', ProfessionalObjectiveViewSet, basename='professional-objective')

urlpatterns = [
    path('', include(router.urls)),
]