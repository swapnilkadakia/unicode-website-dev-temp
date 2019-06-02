## INSTALLATION GUIDE

* git clone https://github.com/jaygala24/unicode-website-dev-temp.git
* cd unicode-website-dev-temp
* python3 -m venv .
* source bin/activate (MAC/Linux)
* cd ./Scripts/activate && cd .. (Windows)
* python manage.py makemigrations
* python manage.py migrate
* python manage.py createsuperuser (creating a superuser to access admin)
* python manage.py runserver
