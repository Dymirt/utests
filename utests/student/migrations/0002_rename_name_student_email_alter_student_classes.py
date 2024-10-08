# Generated by Django 4.2.16 on 2024-09-28 23:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subject', '0002_subject_teacher_alter_subject_code_class'),
        ('student', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='student',
            old_name='name',
            new_name='email',
        ),
        migrations.AlterField(
            model_name='student',
            name='classes',
            field=models.ManyToManyField(blank=True, null=True, related_name='students', to='subject.class'),
        ),
    ]
