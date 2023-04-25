# Generated by Django 4.2 on 2023-04-25 00:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('lessons', '0002_student'),
    ]

    operations = [
        migrations.CreateModel(
            name='StudentTeacher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lessons.student')),
                ('teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lessons.teacher')),
            ],
        ),
        migrations.CreateModel(
            name='Class',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lessons.student')),
                ('teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lessons.teacher')),
            ],
        ),
    ]
