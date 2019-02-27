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
        /*dockerImage = docker.build + "registry-platform-services.platform.mnscorp.net/kajanth/developer-docs:$BUILD_NUMBER"*/
        dockerImage = docker.build("registry-platform-services.platform.mnscorp.net/kajanth/developer-doc:$BUILD_NUMBER", "-f Dockerfile .")
        /* app = docker.build("kajanth/testapp") */
    }

    stage('Deploy Image') {
        docker.withRegistry( 'registry-platform-services.platform.mnscorp.net', 'platform-services-docker-registry') {
        dockerImage.push()
        }
    }
}
