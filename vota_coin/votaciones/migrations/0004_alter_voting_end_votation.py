# Generated by Django 3.2.15 on 2022-10-25 05:10

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('votaciones', '0003_voting_end_votation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='voting',
            name='end_votation',
            field=models.DateField(default=datetime.datetime(2022, 10, 25, 5, 10, 25, 556041, tzinfo=utc)),
        ),
    ]
