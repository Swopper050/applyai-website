class TestMultiplyAPI:
    def test_multiply(self, client):
        response = client.get("/multiply?x=1.2&y=2.0")

        assert response.status_code == 200
        assert response.json == {"result": 2.4}
