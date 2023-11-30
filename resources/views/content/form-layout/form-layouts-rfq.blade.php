@extends('layouts/contentNavbarLayout')

@section('title', 'Quotes Layouts - Forms')

@section('content')
<div>

<div class="table-responsive text-nowrap col-sm-8">
        
        <table class="table">
          <thead>
            <tr class="text-nowrap">
              <th>ID</th>
              <th>Req Item</th>
              <th>Quantity</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody class="table-border-bottom-0">
            <tr>
              <th scope="row">1</th>
              <td>Masking tape</td>
              <td>20</td>
              <td>  <button type="button" class="btn btn-outline-secondary btn-sm" onclick="validateForm()">Select</button></td>
            </tr>
            <!-- Add more rows as needed -->
          </tbody>
        </table>
    </div>
    <div class="col-sm-6 mb-3">
                <label class="col-form-label" for="measure">Supplier Catergory</label>
                <select class="form-select" id="measure" name="measure" required>
                    <option value="" disabled selected>Select </option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                </select>
            </div>
    <form id="supplierForm" action="" method="post">
        @csrf
        <div class="row">
        <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="measure">Supplier Name</label>
                <select class="form-select" id="measure" name="measure" required>
                    <option value="" disabled selected>Select </option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                </select>
            </div>

            <div class="col-sm-2 mb-3">
                <label class="col-form-label" for="quantity">Quote per Unit</label>
                <input type="text" class="form-control" id="quantity" name="quantity" placeholder=" " required />
            </div>

            <div class="col-sm-4 mb-3">
                <label class="col-form-label" for="quantity">Comments</label>
                <input type="text" class="form-control" id="quantity" name="quantity" placeholder=" " required />
            </div>

            <div class="col-sm-2 mb-3">
                <label class="col-form-label" for="quantity">ETA Date</label>
                <input type="date" class="form-control" id="quantity" name="quantity" placeholder=" " required />
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
