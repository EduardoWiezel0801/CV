from django.db import models

class PersonalInfo(models.Model):
    name = models.CharField(max_length=200, verbose_name="Nome")
    title = models.CharField(max_length=300, verbose_name="Título")
    location = models.CharField(max_length=200, verbose_name="Localização")
    age = models.IntegerField(verbose_name="Idade")
    photo = models.ImageField(upload_to='photos/', verbose_name="Foto", null=True, blank=True)
    website = models.URLField(verbose_name="Website", blank=True)
    linkedin = models.URLField(verbose_name="LinkedIn", blank=True)
    github = models.URLField(verbose_name="GitHub", blank=True)
    email = models.EmailField(verbose_name="Email", blank=True)
    
    class Meta:
        verbose_name = "Informação Pessoal"
        verbose_name_plural = "Informações Pessoais"
    
    def __str__(self):
        return self.name


class Summary(models.Model):
    main = models.TextField(verbose_name="Resumo Principal")
    secondary = models.TextField(verbose_name="Resumo Secundário")
    ai_specialization = models.TextField(verbose_name="Especialização em IA")
    
    class Meta:
        verbose_name = "Resumo"
        verbose_name_plural = "Resumos"
    
    def __str__(self):
        return "Resumo Profissional"


class Experience(models.Model):
    title = models.CharField(max_length=200, verbose_name="Cargo")
    company = models.CharField(max_length=200, verbose_name="Empresa")
    company_logo = models.ImageField(upload_to='companies/', verbose_name="Logo da Empresa", null=True, blank=True)
    company_url = models.URLField(verbose_name="URL da Empresa", blank=True)
    period = models.CharField(max_length=100, verbose_name="Período")
    location = models.CharField(max_length=200, verbose_name="Localização")
    company_description = models.TextField(verbose_name="Descrição da Empresa")
    description = models.TextField(verbose_name="Descrição do Cargo")
    responsibilities = models.JSONField(verbose_name="Responsabilidades", default=list)
    order = models.IntegerField(default=0, verbose_name="Ordem")
    
    class Meta:
        verbose_name = "Experiência"
        verbose_name_plural = "Experiências"
        ordering = ['order']
    
    def __str__(self):
        return f"{self.title} - {self.company}"


class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('ai', 'Inteligência Artificial & Machine Learning'),
        ('programming', 'Linguagens de Programação'),
        ('frameworks', 'Frameworks & Tecnologias'),
        ('systems', 'Sistemas Empresariais'),
        ('management', 'Gestão & Liderança'),
        ('tools', 'Ferramentas & Plataformas'),
    ]
    
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, verbose_name="Categoria")
    name = models.CharField(max_length=100, verbose_name="Nome")
    highlight = models.BooleanField(default=False, verbose_name="Destaque")
    order = models.IntegerField(default=0, verbose_name="Ordem")
    
    class Meta:
        verbose_name = "Habilidade"
        verbose_name_plural = "Habilidades"
        ordering = ['category', 'order']
    
    def __str__(self):
        return f"{self.name} ({self.get_category_display()})"


class Project(models.Model):
    title = models.CharField(max_length=200, verbose_name="Título")
    tech = models.CharField(max_length=200, verbose_name="Tecnologias")
    description = models.TextField(verbose_name="Descrição")
    image = models.ImageField(upload_to='projects/', verbose_name="Imagem", null=True, blank=True)
    url = models.URLField(verbose_name="URL do Projeto", blank=True)
    github_url = models.URLField(verbose_name="GitHub", blank=True)
    highlight = models.BooleanField(default=False, verbose_name="Projeto de Destaque")
    order = models.IntegerField(default=0, verbose_name="Ordem")
    
    class Meta:
        verbose_name = "Projeto"
        verbose_name_plural = "Projetos"
        ordering = ['order']
    
    def __str__(self):
        return self.title


class Education(models.Model):
    title = models.CharField(max_length=200, verbose_name="Título")
    institution = models.CharField(max_length=200, verbose_name="Instituição")
    description = models.TextField(verbose_name="Descrição")
    order = models.IntegerField(default=0, verbose_name="Ordem")
    
    class Meta:
        verbose_name = "Formação"
        verbose_name_plural = "Formações"
        ordering = ['order']
    
    def __str__(self):
        return f"{self.title} - {self.institution}"


class PersonalInterest(models.Model):
    title = models.CharField(max_length=200, verbose_name="Título")
    description = models.TextField(verbose_name="Descrição")
    
    class Meta:
        verbose_name = "Interesse Pessoal"
        verbose_name_plural = "Interesses Pessoais"
    
    def __str__(self):
        return self.title


class ProfessionalObjective(models.Model):
    title = models.CharField(max_length=200, verbose_name="Título")
    description = models.TextField(verbose_name="Descrição")
    
    class Meta:
        verbose_name = "Objetivo Profissional"
        verbose_name_plural = "Objetivos Profissionais"
    
    def __str__(self):
        return self.title