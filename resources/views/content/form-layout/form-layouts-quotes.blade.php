@extends('layouts/contentNavbarLayout')

@section('title', 'Quotes Layouts - Forms')

@section('content')
<div>
    <form id="supplierForm" action="" method="post">
        @csrf
        <div class="row">
            <!-- Supplier Category Dropdown -->
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="sub-company">Sub Company</label>
                <select class="form-select" id="sub-company" name="sub-company" required>
                    <option value="" disabled selected>Select a category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="department">Department</label>
                <select class="form-select" id="department" name="department" required>
                    <option value="" disabled selected>Select a category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="port-of-delivery">Port of Delivery</label>
                <select class="form-select" id="port-of-delivery" name="port-of-delivery" required>
                    <option value="" disabled selected>Select a category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-8 mb-3">
                <label class="col-form-label" for="purpose-of-purchase">Purpose of purchase</label>
                <input type="text" class="form-control" id="purpose-of-purchase" name="purpose-of-purchase" placeholder="Purpose of Purchase" required />
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="exact-location">Exact Location</label>
                <input type="text" class="form-control" id="exact-location" name="exact-location" placeholder="Exact Location" required />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="ref-number">Ref Number</label>
                <input type="text" class="form-control" id="ref-number" name="ref-number" placeholder="Ref Number" required />
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="dac-number">DAC Number</label>
                <input type="text" class="form-control" id="dac-number" name="dac-number" placeholder="DAC Number" required />
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="urgency">Urgency</label>
                <select class="form-select" id="urgency" name="urgency" required>
                    <option value="" disabled selected>Select a category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="Department">Department</label>
                <select class="form-select" id="Department" name="Department" required>
                    <option value="" disabled selected>Select a category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="Port of Delivery">Port of Delivery</label>
                <select class="form-select" id="Port of Delivery" name="Port of Delivery" required>
                    <option value="" disabled selected>Select a category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="office">Office</label>
                <select class="form-select" id="office" name="office" required>
                    <option value="" disabled selected>Select a category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="currency">Currency</label>
                <select class="form-select" id="currency" name="currency" required>
                    <option value="" disabled selected>Select a category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="vat">VAT</label>
                <select class="form-select" id="vat" name="vat" required>
                    <option value="" disabled selected>Select a category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
           
        </div>
        <div class="row mt-3">
            <div class="col-sm-8 mb-3">
                <label class="col-form-label" for="document-upload">Upload Documents</label>
                <input type="file" class="form-control" id="document-upload" name="document-upload" required />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-8 mb-3">
                <label class="col-form-label" for="requisition-item">Requisition item</label>
                <input type="text" class="form-control" id="requisition-item" name="requisition-item" placeholder="Requisition Item" required />
            </div>
            <div class="col-sm-2 mb-3">
                <label class="col-form-label" for="qty">Qty</label>
                <input type="text" class="form-control" id="qty" name="qty" placeholder="Qty" required />
            </div>
            <div class="col-sm-2 mb-3">
                <label class="col-form-label" for="measure">Measure</label>
                <input type="text" class="form-control" id="measure" name="measure" placeholder="Measure" required />
            </div>
        </div>
        <div class="row justify-content-end mt-3">
            <div class="col-sm-10">
                <button type="button" class="btn btn-primary" onclick="validateForm()">Send</button>
            </div>
        </div>
    </form>
</div>

<script>
    function validateForm() {
        var form = document.getElementById('supplierForm');
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
