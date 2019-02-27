node {

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */
        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */
        docker.build("kajanth/developer-doc", "-f Dockerfile .")
        /* app = docker.build("kajanth/testapp") */
    }
}
