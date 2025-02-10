[Tutorial](https://cloud.google.com/kubernetes-engine/docs/deploy-app-cluster)

```
gcloud container clusters create-auto hello-cluster --location=us-central1
gcloud components install gke-gcloud-auth-plugin
gcloud components install kubectl
gcloud container clusters get-credentials hello-cluster --location us-central1
kubectl create deployment hello-server --image=us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0
kubectl expose deployment hello-server --type LoadBalancer --port 80 --target-port 8080
kubectl get pods
kubectl get service hello-server


kubectl delete servce hello-server
gcloud container clusters delete hello-cluster --location us-central1

```