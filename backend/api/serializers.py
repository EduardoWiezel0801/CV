from rest_framework import serializers
from .models import (
    PersonalInfo, Summary, Experience, Skill, 
    Project, Education, PersonalInterest, ProfessionalObjective
)


class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = '__all__'
    
    def validate_age(self, value):
        """Valida que a idade está em um range válido"""
        if value < 0 or value > 120:
            raise serializers.ValidationError("Idade deve estar entre 0 e 120 anos")
        return value
    
    def validate_email(self, value):
        """Valida formato básico de email"""
        if value and '@' not in value:
            raise serializers.ValidationError("Email inválido")
        return value


class SummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Summary
        fields = '__all__'
    
    def validate(self, data):
        """Valida que pelo menos um campo de resumo está preenchido"""
        if not any([data.get('main'), data.get('secondary'), data.get('ai_specialization')]):
            raise serializers.ValidationError(
                "Pelo menos um campo de resumo deve ser preenchido"
            )
        return data


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'
    
    def validate_year(self, value):
        """Valida que o ano não é futuro"""
        from datetime import datetime
        current_year = datetime.now().year
        if value and value > current_year:
            raise serializers.ValidationError(
                f"Ano não pode ser maior que {current_year}"
            )
        return value


class SkillSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    
    class Meta:
        model = Skill
        fields = '__all__'
    
    def validate_name(self, value):
        """Valida que o nome da skill não está vazio"""
        if not value or not value.strip():
            raise serializers.ValidationError("Nome da habilidade não pode estar vazio")
        return value.strip()


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
    
    def validate_title(self, value):
        """Valida que o título não está vazio"""
        if not value or not value.strip():
            raise serializers.ValidationError("Título do projeto não pode estar vazio")
        return value.strip()


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'
    
    def validate(self, data):
        """Valida que título e instituição estão preenchidos"""
        if not data.get('title') or not data.get('institution'):
            raise serializers.ValidationError(
                "Título e instituição são obrigatórios"
            )
        return data


class PersonalInterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInterest
        fields = '__all__'


class ProfessionalObjectiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfessionalObjective
        fields = '__all__'
