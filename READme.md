# 🚀 DevOps Mini Project – End-to-End CI/CD Pipeline


<img width="1306" height="916" alt="Assesment" src="https://github.com/user-attachments/assets/da8391bd-2796-4f0f-83ca-b59214563803" />


## 📌 Overview

This project demonstrates a **complete DevOps pipeline** that automates:

* Code Quality Checks (Lint & Test)
* Application Build using Docker
* Infrastructure Provisioning using Terraform
* Automated Deployment to AWS EC2
* Monitoring using Prometheus & Grafana

---

# 🏗️ CI/CD Pipeline Flow

```text
1. Code Push (GitHub)
2. Lint Check
3. Run Tests
4. Build Docker Image
5. Terraform Plan (Infrastructure Validation)
6. Deploy Application to EC2
```

---

# ⚙️ Technologies Used

## ☁️ Cloud & Infrastructure

* AWS EC2 (Amazon Linux)
* AWS Security Groups
* AWS IAM

## ⚙️ DevOps Tools

* GitHub Actions (CI/CD)
* Terraform (IaC)

## 🐳 Containerization

* Docker

## 📊 Monitoring

* Prometheus
* Grafana

## 💻 Backend

* Node.js (Express)

---

# 📁 Project Structure

```bash
Assesment/
│
├── app/                  # Node.js Application
├── terraform/            # Terraform Infrastructure Code
├── monitoring/           # Prometheus & Grafana
├── .github/workflows/
│     └── pipeline.yml    # CI/CD Pipeline
└── README.md
```

---

# 🔄 Detailed Workflow Explanation

## 🔹 Step 1: Code Push

* Developer pushes code to `main` branch
* GitHub Actions pipeline is triggered automatically

---

## 🔹 Step 2: Lint Stage

* Code quality checks are performed
* Ensures clean and maintainable code

---

## 🔹 Step 3: Test Stage

* Runs application tests
* Validates functionality before build

---

## 🔹 Step 4: Build Stage

* Docker image is created:

```bash
docker build -t devops-app ./app
```

---

## 🔹 Step 5: Terraform Plan

* Validates infrastructure changes

```bash
terraform plan
```

* Ensures no errors before deployment

---

## 🔹 Step 6: Deployment Stage

### 🚀 What Happens:

1. EC2 instance is identified using AWS CLI (via tag)
2. Docker image is transferred to EC2
3. Existing container is stopped
4. New container is deployed

```bash
docker stop devops-app
docker rm devops-app
docker run -d -p 3000:3000 devops-app
```

---

# 🔐 GitHub Secrets Configuration

Go to:
**GitHub → Settings → Secrets → Actions**

Add:

```text
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
EC2_SSH_KEY
```

---

# ☁️ Infrastructure Setup (Terraform)

## Steps:

```bash
cd terraform
terraform init
terraform apply
```

### This will:

* Create EC2 instance (Amazon Linux)
* Configure Security Group (ports 22 & 3000)
* Install Docker automatically using user_data

---

# 🌐 Access Application

```text
http://<EC2_PUBLIC_IP>:3000
```

---

# 📊 Monitoring Setup

```bash
cd monitoring
docker-compose up
```

Access:

* Prometheus → http://localhost:9090
* Grafana → http://localhost:3001

---

# 🔥 Key Features

* ✅ Fully automated CI/CD pipeline
* ✅ Infrastructure as Code (Terraform)
* ✅ Docker-based deployment
* ✅ Dynamic EC2 discovery (no manual IP)
* ✅ Integrated monitoring stack

---

# 🚀 Future Enhancements

* Use AWS ECR instead of SCP transfer
* Implement Load Balancer (ALB)
* Add Auto Scaling Group
* Use AWS SSM instead of SSH
* Enable HTTPS with ACM

---

# 🎯 Conclusion

This project demonstrates a **real-world DevOps workflow**, integrating:

* Continuous Integration (CI)
* Continuous Deployment (CD)
* Infrastructure Automation
* Containerization
* Monitoring

---

# 👨‍💻 Author

**Vishesh Patil**

---

# ⭐ If you like this project, give it a star!
