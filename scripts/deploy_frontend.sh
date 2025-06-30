#!/bin/bash

ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

# Pull and deploy the Docker image
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com
docker pull $ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/react-app:latest

if docker ps -a --format '{{.Names}}' | grep -q "^react-app$"; then
  echo "Stopping and removing the existing container..."
  docker stop react-app
  docker rm react-app
else
  echo "No existing container named 'react-app' found. Skipping removal."
fi
docker run -d -p 3000:3000 --name react-app $ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/react-app:latest
