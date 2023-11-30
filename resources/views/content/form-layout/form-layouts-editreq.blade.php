@extends('layouts/contentNavbarLayout')

@section('title', 'Quotes Layouts - Forms')

@section('content')
<div>
    <form id="supplierForm" action="" method="post">
        @csrf
        <div class="row">
        <h5>Requsition Details</h5>
            <div class="col-sm-3 mb-3">
                <label class="col-form-label" for="purpose-of-purchase">Req Item</label>
                <textarea class="form-control" id="purpose-of-purchase" 
                          name="purpose-of-purchase" placeholder="Purpose of Purchase" required>
                </textarea>
            </div>

            <div class="col-sm-2 mb-3">
                <label class="col-form-label" for="quantity">Quantity</label>
                <input type="text" class="form-control" id="quantity" name="quantity" placeholder="" required />
            </div>

            <div class="col-sm-2 mb-3">
                <label class="col-form-label" for="measure">Measure</label>
                <select class="form-select" id="measure" name="measure" required>
                    <option value="" disabled selected>Select </option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                </select>
            </div>

            <div class="col-sm-2 mt-3">
                <button type="button" class="btn btn-success mt-4"  onclick="validateForm()">Add</button>
            </div>
        </div>
    </form>

    <div class="table-responsive text-nowrap">
        
        <table class="table">
          <thead>
            <tr class="text-nowrap">
              <th>#</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Measure</th>
            </tr>
          </thead>
          <tbody class="table-border-bottom-0">
            <tr>
              <th scope="row">1</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <!-- Add more rows as needed -->
          </tbody>
        </table>
    </div>
</div>
<div class="row">
<div class="col-sm-4 mt-3">
                <button type="button" class="btn btn-success mt-4"  onclick="validateForm()">Save Incomplete PR</button>
            </div>
            <div class="col-sm-4 mt-3">
                <button type="button" class="btn btn-success mt-4"  onclick="validateForm()">Previous Window</button>
            </div>
            <div class="col-sm-2 mt-3">
                <button type="button" class="btn btn-success mt-4"  onclick="validateForm()">Submit PR</button>
            </div>
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
