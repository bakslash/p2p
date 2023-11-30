@extends('layouts/contentNavbarLayout')

@section('title', 'Vertical Layouts - Forms')

@section('content')
<div>
    <form id="reqForm" action="" method="post">
        @csrf
        <div class="row">
            <!-- Supplier Category Dropdown -->
            <h5>PR Details</h5>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="sub-company">Sub Company</label>
                <select class="form-select" id="sub-company" name="sub-company" required>
                    <option value="" disabled selected>Select sub company</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="department">Department</label>
                <select class="form-select" id="department" name="department" required>
                    <option value="" disabled selected>Select a department</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="purpose-of-purchase">Purpose of Purchase</label>
                <input type="text" class="form-control" id="purpose-of-purchase" name="purpose-of-purchase" placeholder="Purpose of Purchase" required />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="urgency">Urgency</label>
                <select class="form-select" id="vat" name="vat" required>
                    <option value="" disabled selected>Select Urgency </option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
           
            <div class="col-sm-4 mb-3">
            <label class="col-form-label" for="point-of-delivery">Point of delivery(Office)</label>
                <select class="form-select" id="point-of-delivery" name="point-of-delivery" required>
                    <option value="" disabled selected>Select PoD</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="exact-location">Exact Location</label>
                <input type="text" class="form-control" id="exact-location" name="exact-location" placeholder="Exact Location" required />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="File-number">File Number</label>
                <input type="text" class="form-control" id="File-number" name="File-number" placeholder="" required />
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="vessel">Vessel</label>
                <input type="text" class="form-control" id="vessel" name="vessel" placeholder="" required />
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="voyage">Voyage</label>
                <input type="text" class="form-control" id="voyage" name="voyage" placeholder="" required />
            </div>
           
        </div>
        <div class="row">
           
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="dac0number">DAC Number</label>
                <input type="text" class="form-control" id="dac0number" name="dac0number" placeholder="" required />
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="currency">Currency</label>
                <select class="form-select" id="currency" name="currency" required>
                    <option value="" disabled selected>Select Currency</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="office">Office</label>
                <select class="form-select" id="vat" name="vat" required>
                    <option value="" disabled selected>Select Office</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
           
        </div>

          <div class="row">
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="purchase0catergory">Purchase catergory</label>
                <select class="form-select" id="purchase0catergory" name="purchase0catergory" required>
                    <option value="" disabled selected>Select a category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="vat">VAT%</label>
                <select class="form-select" id="vat" name="vat" required>
                    <option value="" disabled selected>Select VAT</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
           
        </div>
        <div class="row mt-3">
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="document-upload">Upload Documents</label>
                <input type="file" class="form-control" id="document-upload" name="document-upload" required />
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="document-upload">Upload Documents</label>
                <input type="file" class="form-control" id="document-upload" name="document-upload" required />
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="document-upload">Upload Documents</label>
                <input type="file" class="form-control" id="document-upload" name="document-upload" required />
            </div>
        </div>
       
        <div class="row justify-content-end mt-3">
            <div class="col-sm-10">
                <button type="button" class="btn btn-primary" onclick="validateForm()">Proceed to req Items</button>
            </div>
        </div>
    </form>
</div>


<script>
    function validateForm() {
        var form = document.getElementById('reqForm');
        if (form.checkValidity()) {
            form.submit();
        } else {
            // Optionally, display error messages or handle validation failure
            alert('Please fill in all required fields.');
        }
    }

    // Add event listeners to update the styling on input change
    document.addEventListener('input', function (event) {
        if (event.target.tagName.toLowerCase() === 'input' || event.target.tagName.toLowerCase() === 'select') {
            updateValidationStatus(event.target);
        }
    });

    function updateValidationStatus(input) {
        if (input.checkValidity()) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        } else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
        }
    }
</script>
@endsection
