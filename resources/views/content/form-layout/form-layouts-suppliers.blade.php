@extends('layouts/contentNavbarLayout')

@section('title', ' Purchase  - Forms')

@section('content')
<div>
    <form id="supplierForm" action="" method="">
        @csrf
        <div class="row">
            <!-- Supplier Category Dropdown -->
            <div class="col-sm-6 mb-3">
                <label class="col-form-label" for="supplier-category">Supplier Category</label>
                <select class="form-select" id="supplier-category" name="supplier-category" required>
                    <option value="" disabled selected>Select a category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <label class="col-form-label" for="supplier">Supplier</label>
                <select class="form-select" id="supplier" name="supplier" required>
                    <option value="" disabled selected>Select a supplier</option>
                    <option value="1">1</option>
                    <option value="2">Category 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
            <div class="col-sm-3 mb-3">
                <label class="col-form-label" for="comments">Comments</label>
                <input type="text" class="form-control" id="comments" name="comments" 
                required />
            </div>
            <div class="col-sm-2">
                <label class="col-form-label" for="date">Date</label>
                <input type="date" class="form-control" id="date" name="date" required />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm-6">
                <label class="col-form-label" for="document-upload">Suppliers Documents</label>
                <input type="file" class="form-control" id="document-upload" name="document-upload" required />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm-4">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="toggle-switch" name="toggle-switch" />
                    <label class="form-check-label" for="toggle-switch">Account Active</label>
                </div>
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
</script>


@endsection
