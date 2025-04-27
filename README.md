# Smart-Image-Analyzer-using-AWS-services
A web application to detect text, labels, and faces from images using AWS Rekognition, Translate, and Comprehend — with automatic translation support for text detection.

🚀 Features : 
📄 Text Detection — Extracts readable text from images.
🏷️ Label Detection — Identifies objects, scenes, and concepts.
🙂 Face Detection — Detects faces, age ranges, gender, and emotions.
🌍 Translation — Translates detected text into your selected language (only for text detection).
🖼️ Bounding Boxes — Draws boxes around detected faces and labels.
🖥️ Modern UI — Built with React.js + Tailwind CSS.

🛠️ Tech Stack : 
Frontend -->	React.js (Next.js)
Backend	 -->  AWS Lambda (Python)
Cloud Services --> Rekognition, Translate, Comprehend, API Gateway

📷 Screenshots : 

![image](https://github.com/user-attachments/assets/3aa82f91-bbc5-49a1-b0b0-dec561892c87)
![image](https://github.com/user-attachments/assets/b66c4d2b-e6ca-4aa4-b484-de2afe5cd441)
![image](https://github.com/user-attachments/assets/ed4b2c18-c384-4eed-a7c5-4d312580838c)
![image](https://github.com/user-attachments/assets/77d1da71-66c2-4a7f-b556-e7f0fa2c22a8)
![image](https://github.com/user-attachments/assets/17c2da0a-8094-4c32-993a-9e12580dd775)
![image](https://github.com/user-attachments/assets/e1947e74-69c3-4960-98e3-afc6805ff2c4)
![image](https://github.com/user-attachments/assets/0ce842a1-a3ab-4bc9-b902-ade38af0152e)
![image](https://github.com/user-attachments/assets/52ce4fde-853a-442b-b7cf-876da4d247ec)
![image](https://github.com/user-attachments/assets/d80a0e2e-440c-423d-b212-096216727188)
![image](https://github.com/user-attachments/assets/b4552571-8b40-4028-96c1-2cfbe86578c1)

🔗 AWS Services Used : 
Amazon Rekognition → Detects text, labels, and faces in uploaded images.
Amazon Translate → Translates detected text into the selected target language.
Amazon Comprehend → Detects source language when needed (through AWS Translate).
AWS Lambda → Serverless compute to process images and call AWS services.
API Gateway → Creates REST API endpoints to connect frontend and backend.

📄 Important Notes : 
This app does not use custom Machine Learning models — it purely uses AWS managed services.
Translation is available only for text detection.
Your AWS Lambda function must have appropriate IAM permissions to access Rekognition, Translate, and Comprehend.

🧠 Future Ideas :
Store uploads and results in S3.
Add user authentication using AWS Cognito.
Improve error handling and fallback mechanisms.
Support multiple file uploads.

📝 License :
This project is licensed under the MIT License.














		
