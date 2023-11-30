@extends('layouts/contentNavbarLayout')

@section('title', 'Tables - Basic Tables')

@section('content')
<h4 class="py-3 mb-4"><span class="text-muted fw-light">Procurement Manager 
  <br>
  <br>
</span> Add PR
</h4>



<!-- Responsive Table -->
<div class="card">
<div class="row">
    <label class="col-form-label" for="supplier-category">Criteria</label>
    <div class="col-sm-3">
        <select class="form-select form-select-sm" id="supplier-category">
            <option value="category1">1</option>
            <option value="category2">Category 2</option>
        </select>
    </div>
    <div class="col-sm-3">
        <input type="text" class="form-control form-control-sm" id="supplier-code" placeholder="" />
    </div>
    <div class="col-sm-2">
        <button type="button" class="btn btn-outline-secondary btn-sm" onclick="validateForm()">Find</button>
    </div>
    <div class="col-sm-2 ml-8">
        <button type="button" class="btn btn-secondary btn-sm" onclick="validateForm()">Add</button>
    </div>
</div>



  <div class="table-responsive text-nowrap">
    <table class="table">
      <thead>
        <tr class="text-nowrap">
          <th>ID</th>
          <th>Request Purpose</th>
          <th>Staff</th>
          <th>Department </th>
          <th>Req  Date</th>
          <th>Completed </th>
          <th>Action</th>
        
        </tr>
      </thead>
      <tbody class="table-border-bottom-0">
        <tr>
          <th scope="row">1</th>
          <td>Masking Tape</td>
          <td>Muasa </td>
          <td> Accounts</td>
          <td>04/06/2022</td>
          <td>True </td>
          <td>  <button type="button" class="btn btn-outline-secondary btn-sm" onclick="validateForm()">Select</button></td>
          
        </tr>
       
     
      </tbody>
    </table>
  </div>
</div>
<!--/ Responsive Table -->

@endsection
