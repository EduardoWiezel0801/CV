from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import (
    PersonalInfo, Summary, Experience, Skill, 
    Project, Education, PersonalInterest, ProfessionalObjective
)
from .serializers import (
    PersonalInfoSerializer, SummarySerializer, ExperienceSerializer,
    SkillSerializer, ProjectSerializer, EducationSerializer,
    PersonalInterestSerializer, ProfessionalObjectiveSerializer
)


class PersonalInfoViewSet(viewsets.ModelViewSet):
    queryset = PersonalInfo.objects.all()
    serializer_class = PersonalInfoSerializer


class SummaryViewSet(viewsets.ModelViewSet):
    queryset = Summary.objects.all()
    serializer_class = SummarySerializer


class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    
    @action(detail=False, methods=['get'])
    def by_category(self, request):
        """Agrupa skills por categoria"""
        categories = {}
        for choice in Skill.CATEGORY_CHOICES:
            category_key = choice[0]
            category_name = choice[1]
            skills = Skill.objects.filter(category=category_key)
            categories[category_key] = {
                'title': category_name,
                'items': SkillSerializer(skills, many=True).data,
                'highlight': any(skill.highlight for skill in skills)
            }
        return Response(categories)


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


class PersonalInterestViewSet(viewsets.ModelViewSet):
    queryset = PersonalInterest.objects.all()
    serializer_class = PersonalInterestSerializer


class ProfessionalObjectiveViewSet(viewsets.ModelViewSet):
    queryset = ProfessionalObjective.objects.all()
    serializer_class = ProfessionalObjectiveSerializer