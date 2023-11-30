<!-- resources/views/supplier/form.blade.php -->

{!! Form::open(['route' => 'supplier.store', 'method' => 'post']) !!}

<!-- First Horizontal Div -->
<div>
    <label for="supplier_category">Supplier Category:</label>
    {!! Form::select('supplier_category', $supplierCategories, null, ['class' => 'form-control']) !!}
</div>

<div>
    <label for="supplier_code">Supplier Code:</label>
    {!! Form::text('supplier_code', null, ['class' => 'form-control']) !!}
</div>

<div>
    <label for="country_name">Country Name:</label>
    {!! Form::text('country_name', null, ['class' => 'form-control']) !!}
</div>

<div>
    <label for="physical_location">Physical Location:</label>
    {!! Form::text('physical_location', null, ['class' => 'form-control']) !!}
</div>

<!-- Second Horizontal Div -->
<div>
    <label for="postal_address">Postal Address:</label>
    {!! Form::text('postal_address', null, ['class' => 'form-control']) !!}
</div>

<div>
    <label for="telephone">Telephone:</label>
    {!! Form::text('telephone', null, ['class' => 'form-control']) !!}
</div>

<div>
    <label for="city_town">City/Town:</label>
    {!! Form::text('city_town', null, ['class' => 'form-control']) !!}
</div>

<!-- Third Horizontal Div -->
<div>
    <label for="country">Country:</label>
    {!! Form::select('country', $countries, null, ['class' => 'form-control']) !!}
</div>

<div>
    <label for="email">Email:</label>
    {!! Form::email('email', null, ['class' => 'form-control']) !!}
</div>

{!! Form::submit('Submit', ['class' => 'btn btn-primary']) !!}

{!! Form::close() !!}
