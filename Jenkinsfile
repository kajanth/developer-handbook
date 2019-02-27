node {
    environment {
        registry = "registry-platform-services.platform.mnscorp.net"
        registryCredential = 'platform-services-docker-registry'
        dockerImage = ''
    }

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */
        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */
        dockerImage = docker.build registry + "kajanth/developer-docs:$BUILD_NUMBER"
        /* docker.build("kajanth/developer-doc", "-f Dockerfile .") */
        /* app = docker.build("kajanth/testapp") */
    }

    stage('Deploy Image') {
        steps{
            script {
                docker.withRegistry( '', registryCredential ) {
                    dockerImage.push()
                }
            }
        }
    }

    stage('Remove Unused docker image') {
        steps{
            sh "docker rmi $registry:$BUILD_NUMBER"
        }
    }
}
