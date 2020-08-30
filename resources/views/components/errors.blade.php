@if ($errors->any())
    <div class="error">
        <ul>
            @foreach($errors->all() as $error)
                <p>{{ $error }}</p>
            @endforeach
        </ul>
    </div>
@endif
