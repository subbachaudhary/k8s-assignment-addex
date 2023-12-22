Deployement documents:

                                        Task Assignment Documents:

To complete this project i have used following services.
Github (Repository)
Github actions (CI/CD)
EKS Cluster
AWS Cloud
AWS ECR 
AWS EKS
VPC(Virtual Private Network)
Load Balancer
ACM SSL

In this project i have taken two sample projects which is in reactjs for the Frontend and python as a API as well as postgresql as a database server. First of all i have created docker images from that projects and have tested in the local so to build docker images following dockerfiles are written.


Also, the Dockerfile of the reactjs is give below

So, Above two Dockerfile successfully build docker images in the local then i have used Github as CI which build docker images from the code. To build docker images from i have used AWS ECR to push docker images. Also, environment variables are used as secrets in the github actions thus, following secrets are kept in the secrets of the github repository.
CLUSTER_NAME 
ECR_AWS_ACCESS_KEY
ECR_AWS_SECRET_KEY
ECR_REGISTRY
EKS_AWS_ACCESS_KEY
EKS_AWS_SECRET_KEY
AWS_REGION(as env)

Dockerfile Details:
Reactjs = Dockerfile (inside inquiring-front-react/frontend_react_inquiring drectory)
Django = Dockerfile.prod (backend_drf_inquring)
 
docker image build command:
docker build -t $REGISTRY/${REACT_ECR_REPOSITORY}:v$IMAGE_TAG -f inquiring-frontend-react/frontend_react_inquiring/Dockerfile ./inquiring-frontend-react/frontend_react_inquiring && docker push $REGISTRY/${REACT_ECR_REPOSITORY}:v$IMAGE_TAG
docker build -t $REGISTRY/${DJANGO_ECR_REPOSITORY}:v$IMAGE_TAG -f backend_drf_inquiring/Dockerfile.prod ./backend_drf_inquiring && docker push $REGISTRY/${DJANGO_ECR_REPOSITORY}:v$IMAGE_TAG


EKS YAML FILES FOR DJANGO:
Django-deployment.yaml
Service.yaml
PVC.yaml
django-configmap.yaml
Django-secrets.yaml
Alb-ingress.yaml
Postgres-secret.yaml
postgres-statefull.yaml
EKS YAML FILES FOR REACTJS:
React-deployement.yaml
Service.yaml
Pvc.yaml

Kubernetes commands line:
kubectl get all
          echo "Debuging ......................Debuging"
          echo ${{ needs.docker-build.outputs.REACT_IMAGE }} ${{ needs.docker-build.outputs.REACT_REPO }}
          echo ${{ env.REACT_IMAGE }} ${{ env.REACT_REPO }}
          echo "Debuging ......................Debuging"
          pwd
          ls -al
          sed -i.bak "s|${{ env.REACT_REPO }}.*|${{ env.REACT_IMAGE }}|g" ./k8s-django-react/react-manifeast/react-deployment.yaml
          kubectl apply -f ./k8s-django-react/react-manifeast/react-deployment.yaml


Load balancer is used in the ingress and domain is attached to that load balancer.

So, the domain names are given below:
https://task.cloudyninjas.com/
https://api.cloudyninjas.com/(access only from front end app)


