<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <!-- Page CSS -->
       <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ url('assets/component/bootstrap/css/bootstrap.min.css') }}">   

      <link rel="stylesheet" href="{{ url('assets/component/styel.css?ver=1.04') }}">
      <link rel="stylesheet" href="{{ url('assets/component/st.css?ver=1.01') }}">
      <link rel="stylesheet" href="{{ url('assets/component/fontawesome-free-6.2.1-web/css/regular.min.css') }}">
      <link rel="stylesheet" href="{{ url('assets/component/fontawesome-free-6.2.1-web/css/all.min.css') }}">
      <link rel="stylesheet" href="{{ url('assets/component/fontawesome-free-6.2.1-web/css/solid.min.css') }}">
      <link rel="stylesheet" href="{{ url('assets/component/OwlCarousel2-2.3.4/dist/assets/owl.carousel.min.css') }}">
      <link rel="stylesheet" href="{{ url('assets/component/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.min.css') }}">
      <link rel="stylesheet" href="{{ url('frontend/css/login-style.css') }}">
    <title>News Flash</title>
</head>
<body>
<div class="main">
    <div class="container row news-box">
        @foreach($json['articles'] as $articles)
        <div class="card" style="width: 18rem;">
            <img src="{{ $articles['urlToImage'] }}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ $articles['title'] }}</h5>
              <p class="card-text">{!! $articles['description']  !!}</p>
              <a href="{{ $articles['url']  }}" class="btn btn-primary">Read more</a>
            </div>
          </div>
        @endforeach
    </div>
   
</div>

 
   
<!--Js Files-->

<script src="{{ url('frontend/js/jquery-3.5.1.min.js') }}"></script>

<script src="{{ url('frontend/js/popper.min.js') }}"></script>

<script src="{{ url('frontend/js/bootstrap.min.js') }}"></script>

<script src="{{ url('assets/component/OwlCarousel2-2.3.4/dist/owl.carousel.min.js') }}"></script>

<script src="{{ url('assets/component/owlsetting.js') }}"></script>
</body>
</html>