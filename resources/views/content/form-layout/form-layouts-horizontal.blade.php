@extends('layouts/contentNavbarLayout')

@section('title', ' Suppliers  - Forms')

@section('content')
<div>
<div class="row">
  <!-- Supplier Category Dropdown -->
  <div class="col-sm-4 mb-3">
    <label class="col-form-label" for="supplier-category">Supplier Category</label>
    <select class="form-select" id="supplier-category">
      <!-- Add your supplier category options here -->
      <option value="category1">Category 1</option>
      <option value="category2">Category 2</option>
      <!-- Add more options as needed -->
    </select>
  </div>
</div>
<div class="row">

  <!-- Supplier Code, Country, and Physical Location -->
  <div class="col-sm-2">
    <label class="col-form-label " for="supplier-code">Supplier Code</label>
    <input type="text" class="form-control" id="supplier-code" placeholder="Supplier Code" />
</div>
<div class="col-sm-6">
    <label class="col-form-label" for="country">Country</label>
    <input type="text" class="form-control" id="country" placeholder="Country" />
</div>
<div class="col-sm-4">
    <label class="col-form-label" for="physical-location">Physical Location</label>
    <input type="text" class="form-control" id="physical-location" placeholder="Physical Location" />
</div>
</div>

<!-- Postal Address, Telephone -->
<div class="row mb-3">
  
  <div class="col-sm-2">
  <label class=" col-form-label" for="postal-address">Postal Address</label>
    <input type="text" class="form-control" id="postal-address" placeholder="Postal Address" />
  </div>

  
  <div class="col-sm-4">
  <label class=" col-form-label" for="telephone">Telephone</label>
    <input type="text" class="form-control phone-mask" id="telephone" placeholder="Telephone" />
  </div>
  <div class="col-sm-2">
  <label class=" col-form-label" for="city-town">City/Town</label>
    <input type="text" class="form-control" id="postal-address" placeholder="Postal Address" />
  </div>

  <div class="col-sm-4 mb-3">
    <label class="col-form-label" for="supplier-category">Supplier Category</label>
    <select class="form-select" id="supplier-category">
      <!-- Add your supplier category options here -->
      <option value="category1">Category 1</option>
      <option value="category2">Category 2</option>
      <!-- Add more options as needed -->
    </select>
  </div>
</div>

<div class="row">

  <!-- Supplier Code, Country, and Physical Location -->
  <div class="col-sm-2">
    <label class="col-form-label " for="supplier-code">City/ Town</label>
    <input type="text" class="form-control" id="supplier-code" placeholder="Supplier Code" />
</div>
<div class="col-sm-6">
    <label class="col-form-label" for="country">Email</label>
    <input type="text" class="form-control" id="country" placeholder="Country" />
</div>

</div>

<div class="row">

  <!-- Supplier Code, Country, and Physical Location -->
  <div class="col-sm-6">
    <label class="col-form-label " for="supplier-code">City/ Town</label>
    <input type="text" class="form-control" id="supplier-code" placeholder="Supplier Code" />
</div>
<div class="col-sm-4 mb-3">
    <label class="col-form-label" for="supplier-category">Terms</label>
    <select class="form-select" id="supplier-category">
      <!-- Add your supplier category options here -->
      <option value="category1"> 1</option>
      <option value="category2">Category 2</option>
      <!-- Add more options as needed -->
    </select>
  </div>

</div>
<div class="row mb-3">

  <!-- Supplier Code, Country, and Physical Location -->
  <div class="col-sm-3">
    <label class="col-form-label " for="supplier-code">Contact Person</label>
    <input type="text" class="form-control" id="supplier-code" placeholder="Supplier Code" />
</div>
<div class="col-sm-3">
    <label class="col-form-label " for="supplier-code">Contact Person Telephone</label>
    <input type="text" class="form-control" id="supplier-code" placeholder="Supplier Code" />
</div>



<!-- Upload Document Input -->
<div class="row mt-3">
 
  <div class="col-sm-6">
  <label class=" col-form-label" for="document-upload">Suppliers Documents</label>
    <input type="file" class="form-control" id="document-upload" />
  </div>
  
</div>

<!-- Toggle Switch -->
<div class="row mt-3">
 
  <div class="col-sm-4">
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="toggle-switch">
      <label class="form-check-label" for="toggle-switch">Account Active</label>
    </div>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="toggle-switch">
      <label class="form-check-label" for="toggle-switch">Due Deligence Recieved</label>
    </div>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="toggle-switch">
      <label class="form-check-label" for="toggle-switch">Certififcate of commitment</label>
    </div>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="toggle-switch">
      <label class="form-check-label" for="toggle-switch">Bank letter</label>
    </div>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="toggle-switch">
      <label class="form-check-label" for="toggle-switch">Tax Compliance</label>
    </div>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="toggle-switch">
      <label class="form-check-label" for="toggle-switch">Due Deligence Recieved</label>
    </div>
  </div>
</div>

<!-- Submit Button -->
<div class="row justify-content-end mt-3">
  <div class="col-sm-10">
    <button type="submit" class="btn btn-primary">Send</button>
  </div>
</div>


</div>

     

@endsection
