from django.contrib import admin
from .models import (
    PersonalInfo, Summary, Experience, Skill, 
    Project, Education, PersonalInterest, ProfessionalObjective
)


@admin.register(PersonalInfo)
class PersonalInfoAdmin(admin.ModelAdmin):
    list_display = ['name', 'title', 'location', 'age', 'email']
    search_fields = ['name', 'email']


@admin.register(Summary)
class SummaryAdmin(admin.ModelAdmin):
    list_display = ['__str__']


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ['title', 'company', 'period', 'location', 'order']
    list_editable = ['order']
    list_filter = ['company', 'location']
    search_fields = ['title', 'company', 'description']
    ordering = ['order']


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'highlight', 'order']
    list_filter = ['category', 'highlight']
    list_editable = ['order', 'highlight']
    search_fields = ['name']
    ordering = ['category', 'order']


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'tech', 'highlight', 'order']
    list_filter = ['highlight']
    list_editable = ['order', 'highlight']
    search_fields = ['title', 'description']
    ordering = ['order']


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ['title', 'institution', 'order']
    list_editable = ['order']
    search_fields = ['title', 'institution']
    ordering = ['order']


@admin.register(PersonalInterest)
class PersonalInterestAdmin(admin.ModelAdmin):
    list_display = ['title']
    search_fields = ['title', 'description']


@admin.register(ProfessionalObjective)
class ProfessionalObjectiveAdmin(admin.ModelAdmin):
    list_display = ['title']
    search_fields = ['title', 'description']