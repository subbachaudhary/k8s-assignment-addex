# Use a Python base image
FROM python:3.9

# Set the working directory
WORKDIR /app

# Copy and install the Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the source code
COPY . .

# Expose the port your backend is listening on
EXPOSE 8000

# Start the backend server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
