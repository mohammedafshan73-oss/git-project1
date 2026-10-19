pipeline {
    agent none

    stages {
        stage('build') {
            agent {
                label 'build-agent'
            }

            steps {
                deleteDir()

                sh '''
                    git clone https://github.com/mohammedafshan73-oss/git-project1.git
                    ls -l
                '''

                stash name: 'website',
                      includes: 'git-project1/**'
            }
        }

        stage('deploy') {
            agent {
                label 'deploy-agent'
            }

            steps {
                deleteDir()

                unstash 'website'

                sh '''
                    sudo cp -r git-project1/* /var/www/html
                '''
            }
        }
    }
}
