pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    environment {
        DOCKER_IMAGE = "my-nuxt3-app"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Deploy Docker Container') {
            steps {
                sh 'docker stop my-nuxt3-container || true'
                sh 'docker rm my-nuxt3-container || true'
                sh 'docker run -d -p 3000:3000 --name my-nuxt3-container $DOCKER_IMAGE'
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
    }
}
