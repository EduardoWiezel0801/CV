from rest_framework import serializers
from .models import (
    PersonalInfo, Summary, Experience, Skill, 
    Project, Education, PersonalInterest, ProfessionalObjective
)


class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = '__all__'


class SummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Summary
        fields = '__all__'


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'


class PersonalInterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInterest
        fields = '__all__'


class ProfessionalObjectiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfessionalObjective
        fields = '__all__'