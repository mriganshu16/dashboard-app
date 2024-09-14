from flask import Flask, jsonify, request
import pandas as pd

app = Flask(__name__)

# Route to load and filter Excel data
@app.route('/data', methods=['GET'])
def get_filtered_data():
    try:
        # Load the Excel file
        df = pd.read_excel('data.xlsx')
        
        # Apply filtering based on some criteria (replace this with real logic)
        # For example, filtering by status of issues (ongoing/completed)
        filtered_df = df[df['Status'] == 'Ongoing']

        # Convert DataFrame to a dictionary for JSON response
        data = filtered_df.to_dict(orient='records')
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
