import sys
import json
import joblib
import pandas as pd

# Load the models from the 'models' directory inside the backend folder
rf_rainfall = joblib.load('./models/best_rf_rainfall.pkl')
rf_windspeed = joblib.load('./models/rf_windspeed.pkl')
rf_temperature = joblib.load('./models/rf_temperature.pkl')

# Get input data from the Node.js backend
input_data = json.loads(sys.argv[1])

console.log('python file loaded', response.data);
# Extract inputs from the received data
date = input_data['date']
city = input_data['city']

# Assuming city encoding and feature extraction is already handled (adjust if necessary)
# Prepare the input features for the models (Example):
year = pd.to_datetime(date).year
month = pd.to_datetime(date).month
day = pd.to_datetime(date).day

# Here city_encoded can be handled similarly to your original script's encoding
city_encoded = 0  # Replace with actual encoding logic for the input city
# Example input feature array (adjust according to your feature set)
X = [[year, month, day, city_encoded]]

# Make predictions
rainfall_pred = rf_rainfall.predict(X)[0]
windspeed_pred = rf_windspeed.predict(X)[0]
temperature_pred = rf_temperature.predict(X)[0]

# Return the results as JSON
predictions = {
    'rainfall': rainfall_pred,
    'windspeed': windspeed_pred,
    'temperature': temperature_pred
}

print(json.dumps(predictions))


