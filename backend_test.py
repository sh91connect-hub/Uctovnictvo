import requests
import sys
from datetime import datetime
import json

class AccountingWebsiteAPITester:
    def __init__(self, base_url="https://docwizard-6.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            
            result = {
                "test_name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": response.status_code,
                "success": success,
                "response_data": None,
                "error": None
            }

            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    result["response_data"] = response.json()
                except:
                    result["response_data"] = response.text
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                result["error"] = response.text

            self.test_results.append(result)
            return success, response.json() if success and response.headers.get('content-type', '').startswith('application/json') else response.text

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            result = {
                "test_name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": None,
                "success": False,
                "response_data": None,
                "error": str(e)
            }
            self.test_results.append(result)
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        success, response = self.run_test(
            "API Root",
            "GET",
            "api/",
            200
        )
        return success

    def test_contact_form_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "0900123456",
            "message": "Test message from automated testing"
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "api/contact",
            200,
            data=test_data
        )
        
        if success and isinstance(response, dict):
            if response.get('success') and response.get('message'):
                print(f"   ✅ Contact form response: {response.get('message')}")
                return True
            else:
                print(f"   ❌ Invalid response format: {response}")
                return False
        return success

    def test_contact_form_validation(self):
        """Test contact form with missing required fields"""
        test_data = {
            "name": "Test User",
            # Missing email and message
            "phone": "0900123456"
        }
        
        success, response = self.run_test(
            "Contact Form Validation (Missing Fields)",
            "POST",
            "api/contact",
            422,  # Expecting validation error
            data=test_data
        )
        return success

    def test_get_contacts_admin(self):
        """Test getting all contacts (admin endpoint)"""
        success, response = self.run_test(
            "Get All Contacts (Admin)",
            "GET",
            "api/contacts",
            200
        )
        return success

    def print_summary(self):
        """Print test summary"""
        print(f"\n{'='*50}")
        print(f"📊 TEST SUMMARY")
        print(f"{'='*50}")
        print(f"Tests run: {self.tests_run}")
        print(f"Tests passed: {self.tests_passed}")
        print(f"Tests failed: {self.tests_run - self.tests_passed}")
        print(f"Success rate: {(self.tests_passed/self.tests_run*100):.1f}%")
        
        if self.tests_run - self.tests_passed > 0:
            print(f"\n❌ FAILED TESTS:")
            for result in self.test_results:
                if not result["success"]:
                    print(f"   - {result['test_name']}: {result.get('error', 'Status code mismatch')}")
        
        return self.tests_passed == self.tests_run

def main():
    print("🚀 Starting Accounting Website API Tests")
    print("=" * 50)
    
    tester = AccountingWebsiteAPITester()
    
    # Run all tests
    tests = [
        tester.test_api_root,
        tester.test_contact_form_submission,
        tester.test_contact_form_validation,
        tester.test_get_contacts_admin
    ]
    
    for test in tests:
        try:
            test()
        except Exception as e:
            print(f"❌ Test failed with exception: {e}")
    
    # Print summary
    all_passed = tester.print_summary()
    
    # Save results to file
    with open('/app/backend_test_results.json', 'w') as f:
        json.dump({
            "timestamp": datetime.now().isoformat(),
            "total_tests": tester.tests_run,
            "passed_tests": tester.tests_passed,
            "success_rate": (tester.tests_passed/tester.tests_run*100) if tester.tests_run > 0 else 0,
            "test_results": tester.test_results
        }, f, indent=2)
    
    return 0 if all_passed else 1

if __name__ == "__main__":
    sys.exit(main())