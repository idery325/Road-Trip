# Generated by Django 5.0.1 on 2024-01-27 22:13

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Blog",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=255)),
                ("post", models.TextField(blank=True, null=True)),
                ("date", models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name="MyList",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("photo", models.ImageField(blank=True, null=True, upload_to="")),
                ("video", models.FileField(blank=True, null=True, upload_to="")),
                ("url", models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name="Place",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("latitude", models.TextField(blank=True, null=True)),
                ("longitude", models.TextField(blank=True, null=True)),
                ("address", models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name="RecList",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("photo", models.ImageField(blank=True, null=True, upload_to="")),
                ("video", models.FileField(blank=True, null=True, upload_to="")),
                ("url", models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name="Review",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=255)),
                ("post", models.TextField(blank=True, null=True)),
                ("date", models.DateField()),
            ],
        ),
    ]
