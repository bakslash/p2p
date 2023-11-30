@extends('layouts/contentNavbarLayout')

@section('title', 'Quotes Layouts - Forms')

@section('content')
<div>
    <form id="supplierForm" action="" method="post">
        @csrf
        
        <div class="row">
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="invoice-date">Invoice Date</label>
                <input type="date" class="form-control" id="invoice-date" name="invoice-date" 
                placeholder="" required />
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="date-recieved">Date Recieved </label>
                <input type="date" class="form-control" id="date-recieved" name="date-recieved" 
                placeholder="" required />
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="invoice-number">Invoice Number</label>
                <input type="text" class="form-control" id="invoice-number" name="invoice-number" placeholder="invoice Number" required />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="tracking-number">Tracking No</label>
                <input type="text" class="form-control" id="tracking-number" name="tracking-number" placeholder="invoice Number" required />
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="reciept-number">Reciept Number</label>
                <input type="text" class="form-control" id="reciept-number" name="reciept-number" placeholder="reciept Number" required />
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="invoice-amount">Invoice amount</label>
                <input type="text" class="form-control" id="invoice-amount" name="invoice-amount" placeholder="invoice Number" required />
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
        <div class="row mt-3">
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="document-upload">Upload Documents</label>
                <input type="file" class="form-control" id="document-upload" name="document-upload" required />
            </div>
            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="document-upload">Upload Documents</label>
                <input type="file" class="form-control" id="document-upload" name="document-upload" required />
            </div>
            
        </div>
        <div class="row mt-3">
    <div class="col-sm-8 mb-3">
        <label class="col-form-label" for="comments">Comments</label>
        <textarea class="form-control" id="comments" name="comments" placeholder="Enter document text" required></textarea>
        <!-- Add any additional information or requirements here -->
    </div>
    <div class="col-sm-4 mb-3">
        <label class="col-form-label" for="current/new-approver">Current/New Approver Type</label>
        <select class="form-select" id="current/new-approver" name="current/new-approver" required>
            <option value="" disabled selected>Select approver</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
            <!-- Add more options as needed -->
        </select>
        <!-- Add any additional information or requirements here -->
    </div>
    <div class="row mt-3">
    <div class="col-sm mb-3">
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="uncancel-invoice" name="uncancel-invoice" required />
            <label class="form-check-label" for="uncancel-invoice">Uncancel Invoice</label>
        </div>
    </div>
    <div class="col-sm-6 mb-3">
        <label class="col-form-label" for="comments">Uncancel Reason</label>
        <textarea class="form-control" id="comments" name="comments" placeholder="Enter uncancel reason" required></textarea>
        <!-- Add any additional information or requirements here -->
    </div>
</div>


      
        <div class="row justify-content-end mt-3">
            <div class="col-sm-10">
                <button type="button" class="btn btn-outline-secondary" onclick="validateForm()">Add extra invoice</button>
                <button type="button" class="btn btn-success" onclick="validateForm()">Save Invoice</button>
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
