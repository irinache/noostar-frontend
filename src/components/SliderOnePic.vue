<template>	
	<div id="demo" class="carousel slide" data-ride="carousel">
			<div class="container caption">
                <div class="row align-items-center">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-10">
                        <p class="c-invite__title">Учебный центр «Noostar»</p>
                        <p class="c-invite__text">Обучающие программы по программированию<br>
                            и интернет-технологиям для людей любого<br>
                            возраста и с любой базой знаний</p>
                        <div class="c-button">стать студентом</div>
                    </div>
                </div>
            </div>
	  <!-- Indicators -->
	  <ul class="carousel-indicators">
	    <li data-target="#demo" data-slide-to="0" class="active"></li>
	    <li data-target="#demo" data-slide-to="1"></li>
	    <li data-target="#demo" data-slide-to="2"></li>
	  </ul>

	  <!-- The slideshow -->
	  <div class="carousel-inner">
	    <div class="carousel-item active">
	      <img class="d-block w-100" src="../assets/images/bg-header.jpg" alt="Los Angeles">
	      
			
	    </div>
	    <div class="carousel-item">
	      <img class="d-block w-100" src="../assets/images/bg-header.jpg" alt="Chicago">
	      
	    </div>
	    <div class="carousel-item">
	      <img class="d-block w-100" src="../assets/images/bg-header.jpg" alt="New York">
	      
	    </div>
	  </div>

	  <!-- Left and right controls -->
	  <a class="carousel-control-prev" href="#demo" data-slide="prev">
	    <span class="carousel-control-prev-icon"></span>
	  </a>
	  <a class="carousel-control-next" href="#demo" data-slide="next">
	    <span class="carousel-control-next-icon"></span>
	  </a>

	</div>
</template>

<script>
	
</script>

<style lang="less">

@import '../assets/styles/index.less';

.caption {
	position: absolute;
	top: 40%;
	left:10%;
	color: white;
	font-family: Muller;
	z-index: 2;
	width: 80%;
}

.c-button {
    background-color: @mainOrange;
    max-width: 180px;
    display: block;
    width: 100%;
    padding: 12px 12px 8px;
    border: none;
    box-shadow: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-family: Muller;
    text-align: center;
    text-transform: uppercase;
    font-size: 13px;
    line-height: 13px;
    &:hover{
        color: white;
    }
    &--right{
        margin-top: 20px;
        float: right;
        max-width: 140px;
    }
    &--biggest{
        max-width: 190px;
    }
}
.c-invite {
    min-height: 65vh;
    padding: 20px 0;
    width: 100%;
    color: white;
    background: url('../assets/images/bg-header.jpg') center no-repeat;
    background-size: cover;
    font-family: Muller;
    display: flex;
    align-items: center;
    &__title {
        font-weight: bold;
        font-size: 36px;
        line-height: 36px;
        margin-bottom: 25px;
        text-align:left;
    }
    &__text {
        font-size: 18px;
        line-height: 18px;
        margin-bottom: 15px;
        text-align:left;
    }
}


</style>