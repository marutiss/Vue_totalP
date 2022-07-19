<template>
  <header>
            <div id="top">
                <div class="box">
                    <div id="top_logo">
                        <img src="../assets/img/logo.png">
                    </div>  
                      
                    <div id="top_ad">
                        키오스크 주문사이트
                    </div>
                    
                    <div id="linker">
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">
                                    <router-link to="/">Home </router-link>
                                    </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><router-link to="/login">Login</router-link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                            </ul>
                        
                        
                        
                    </div>

                    
                </div>                  
            </div><!-- top-->
            <div class="clear"></div>
            <div id="logo">
                <h1>WELCOME, ENJOY YOUR SHOPPING</h1>
            </div><!-- logo -->
        </header>

<br><br>
        <!-- <nav id="main_menu">
            
        </nav> -->

 <section id="content_box">
            <div class="box">
                <h3>전체상품</h3>
                <div class="clear"></div>

                <ul class="items">
                    <li><img src="../assets/img/계란.jpg"></li>
                    <li class="a">계란 10구</li>
                    <li class="b">5,000원 <span>24%</span></li>
                    <select name="egg_ea">계란 수량
                        <optgroup>                           
                            <option value=001>1</option>
                            <option value=002>2</option>
                            <option value=003>3</option>
                            <option value=004>4</option>
                            <option value=005>5</option>
                        </optgroup>
                    </select>
                    
                <form>
                    <input type="button" value="결제하기" onclick='alert("결제완료")'/>                    
                </form>

                    <li class="c">&quot; 신선한 계란 10구&quot;최저가</li>
                    <li class="d">리뷰 <span>100</span> 평점 <span>4.5/5</span></li>
                </ul>

                <ul class="items">
                    <li><img src="../assets/img/바나나킥.jpeg"></li>
                    <li class="a">바나나킥 1봉지</li>
                    <li class="b">1,500원 <span>10%</span></li>

                    <select name="bananak_ea">바나나킥 수량
                        <optgroup>                           
                            <option value=011>1</option>
                            <option value=012>2</option>
                            <option value=013>3</option>
                            <option value=014>4</option>
                            <option value=015>5</option>
                        </optgroup>
                    </select>

                    <form>
                        <input type="button" value="결제하기" onclick='alert("결제완료")'/>                    
                    </form>

                    <li class="c">&quot; 바나나나나나나&quot;최저가</li>
                    <li class="d">리뷰 <span>100</span> 평점 <span>4.5/5</span></li>
                </ul>

                <ul class="items">
                    <li><img src="../assets/img/삼겹살.jpg"></li>
                    <li class="a">삼겹살 600g</li>
                    <li class="b">10,000원 <span>20%</span></li>

                    <select name="pig_ea">삼겹살 수량
                        <optgroup>                           
                            <option value=021>1</option>
                            <option value=022>2</option>
                            <option value=023>3</option>
                            <option value=024>4</option>
                            <option value=025>5</option>
                        </optgroup>
                    </select>

                    <form>
                        <input type="button" value="결제하기" onclick='alert("결제완료")'/>                    
                    </form>

                    <li class="c">&quot; 한돈 삼겹살&quot;최저가</li>
                    <li class="d">리뷰 <span>100</span> 평점 <span>4.5/5</span></li>
                </ul>

                <ul class="items">
                    <li><img src="../assets/img/삼다수.jpg"></li>
                    <li class="a">삼다수 1.5L 6개입</li>
                    <li class="b">5,900원 <span>22%</span></li>

                    <select name="water_ea">삼다수 수량
                        <optgroup>                           
                            <option value=031>1</option>
                            <option value=032>2</option>
                            <option value=033>3</option>
                            <option value=034>4</option>
                            <option value=035>5</option>
                        </optgroup>
                    </select>

                    <form>
                        <input type="button" value="결제하기" onclick='alert("결제완료")'/>                    
                    </form>

                    <li class="c">&quot; 삼다수 1.5L 6개입&quot;최저가</li>
                    <li class="d">리뷰 <span>100</span> 평점 <span>4.5/5</span></li>
                </ul>

                <ul class="items">
                    <li><img src="../assets/img/콘푸로스트.jpeg"></li>
                    <li class="a">콘푸로스트</li>
                    <li class="b">5,000원 <span>24%</span></li>

                    <select name="con_ea">콘푸로스트 수량
                        <optgroup>                           
                            <option value=041>1</option>
                            <option value=042>2</option>
                            <option value=043>3</option>
                            <option value=044>4</option>
                            <option value=045>5</option>
                        </optgroup>
                    </select>

                    <form>
                        <input type="button" value="결제하기" onclick='alert("결제완료")'/>                    
                    </form>

                    <li class="c">&quot; 호랑이기운이 쑥쑥&quot;최저가</li>
                    <li class="d">리뷰 <span>100</span> 평점 <span>4.5/5</span></li>
                </ul>

                <ul class="items">
                    <li><img src="../assets/img/포카리.jpg"></li>
                    <li class="a">포카리스웨트</li>
                    <li class="b">2,000원 <span>24%</span></li>

                    <select name="po_ea">포카리스웨트 수량
                        <optgroup>                           
                            <option value=051>1</option>
                            <option value=052>2</option>
                            <option value=053>3</option>
                            <option value=054>4</option>
                            <option value=055>5</option>
                        </optgroup>
                    </select>

                    <form>
                        <input type="button" value="결제하기" onclick='alert("결제완료")'/>                    
                    </form>

                    <li class="c">&quot; 포카리스웨트 500ml&quot;최저가</li>
                    <li class="d">리뷰 <span>100</span> 평점 <span>4.5/5</span></li>
                </ul>

                <ul class="items">
                    <li><img src="../assets/img/퐁퐁.jpg"></li>
                    <li class="a">퐁퐁 500ml</li>
                    <li class="b">2,200원 <span>24%</span></li>

                    <select name="pong_ea">퐁퐁 수량
                        <optgroup>                           
                            <option value=061>1</option>
                            <option value=062>2</option>
                            <option value=063>3</option>
                            <option value=064>4</option>
                            <option value=065>5</option>
                        </optgroup>
                    </select>

                    <form>
                        <input type="button" value="결제하기" onclick='alert("결제완료")'/>                    
                    </form>

                    <li class="c">&quot; 뽀득뽀득&quot;최저가</li>
                    <li class="d">리뷰 <span>100</span> 평점 <span>4.5/5</span></li>
                </ul>

                <ul class="items">
                    <li><img src="../assets/img/햇반.jpg"></li>
                    <li class="a">햇반 1개</li>
                    <li class="b">1,100원 <span>24%</span></li>

                    <select name="bob_ea">햇반 수량
                        <optgroup>                           
                            <option value=071>1</option>
                            <option value=072>2</option>
                            <option value=073>3</option>
                            <option value=074>4</option>
                            <option value=075>5</option>
                        </optgroup>
                    </select>

                    <form>
                        <input type="button" value="결제하기" onclick='alert("결제완료")'/>                    
                    </form>

                    <li class="c">&quot; 간편하게 햇반&quot;최저가</li>
                    <li class="d">리뷰 <span>100</span> 평점 <span>4.5/5</span></li>
                </ul>
            </div>

            <div class="clear"></div> 
        </section>

</template>

<script>
export default {
    name: 'ShopPage'
}
</script>

<style>

            * {
                margin: 0;
                padding: 0;
            }

            body {
                color: #444444;
                font-family: "돋움";
            }

            li {
                list-style: none;
            }
            .clear {
                clear: both;
            }
            
            header {
                height: 100px;                
            }

            #top {
                height: 62px;
                background-color: #eae1d8;
            }
            .box {
                width: 1320px;
                margin: 0 auto;
                /* border: solid 1px red; */
            }

            #top_logo {
                float: left;
            }

            #top_logo img {
                width: 50px;                
                margin: 6px 0 0 10px;
            }

            #top_ad {
                float: left;
                margin: 24px 0 0 10px;
                font-size: 12px;
            }
            
           
            
            
           

            #top_box {
                width: 1320px;
                margin: 0 auto;
                border: solid 1px blue;
            }

            #jjim {
                float: left;
                margin: 55px 0 0 20px;
            }

         

            #main_menu {
                padding: 25px 20px;
                border-top: solid 1px #dddddd;
                border-bottom: solid 1px #dddddd;
                font-size: 12px;
            }

            #main_menu li {
                display: inline;
                margin-left: 30px;
            }

            

            #content_box h3 {
                float: left;
                margin-left: 590px;
            }

            #content_box p {
                float: right;
            }

            .items {
                width: 232px;
                float: left;
                margin: 50px 0 0 25px;
            }

            .items .a {
                font-weight: bold;
                color: black;
                margin-top: 20px;
            }

            .items .b {
                font-weight: bold;
                color: black;
                margin-top: 8px;
            }

            .items .b span {
                color: #a26f59;
            }

            .items .c {
                font-size: 12px;
                margin-top: 20px;
                line-height: 130px;
            }

            .items .d {
                font-size: 12px;
                margin-top: 25px;
            }

            .items .d span {
                color: #a26f59;
            }

            footer {
                margin-top: 100px;
                border-top: solid 1px #dddddd;
            }

            #footer_menu {
                padding-top: 30px;
            }

            #footer_menu li {
                display: inline;
                margin-left: 10px;
            }

            .footers {
                float: left;
                margin: 30px 0 0 100px;
            }

            .footers li {
                margin-top: 8px;
                font-size: 12px;
            }

            .footers span {
                font-weight: bold;
            }
</style>