
import React, { Component } from 'react';
import {  BrowserRouter as Router, Link } from 'react-router-dom';
import { Button, FormGroup, Navbar,  NavbarHeader, FormControl, Formcounter } from 'react-bootstrap';

import { withRouter } from 'react-router';

import './navbar.css';

import logo from './images/logo.png';




import axios from 'axios';
// export const history = createHashHistory()


class Navbarr extends Component {

constructor(props){
  super(props);
  this.searchBlood = this.searchBlood.bind(this);

}
// componentDidMount(){
//   history.push('/donorInformation');
// }

searchBlood =(e)=>{
  e.preventDefault();

  let bloodNeed = e.target.elements.bloodNeed.value.trim();
  let areaNeed = e.target.elements.areaNeed.value.trim();

  let needDonor= {
        bloodNeed,
        areaNeed
  }
  console.log(needDonor);
  
axios.post('/bloodRequired/data',needDonor ) .then((response) => {
  // console.log(response.data);

  
  if (response.data) {
    localStorage.setItem("donorInfo",   JSON.stringify({user:response.data}));
      
      console.log(response.data);

         this.props.history.push('/donorInformation');


      
  }





}).catch(function (err) {
  console.log(err);
})





}



  
    render() {
        return (
            <div className ="">
<nav className="navbar navbar-default navbar-fixed-top ">
<div className = "header">
      <div className="container">
        
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <img src={logo} alt="logo" className="LogoImage" />
        </div>
    
        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
          <li> <Link to='/'><span className="textdesign"><b>Home</b></span> </Link></li>
                                        <li> <Link to='/bloodtips'><span className="textdesign"><b>Blood Tips</b></span> </Link></li>

                                         <li> <Link to='/registerform'><span className="textdesign"><b>Register</b></span> </Link></li>
                                        <li><Link to='/loginform'><span className="textdesign"><b>LogIn</b></span>  </Link></li>



                                         <li><Link to='/contactUs'><span className="textdesign"><b>Contact US</b></span></Link></li>

            <li>
              <a className="btn btn-default btn-outline btn-circle"  data-toggle="collapse" href="#nav-collapseSearch" aria-expanded="false" aria-controls="nav-collapseSearch"> Blood Search</a>
            </li>
          </ul>
          <div className="collapse nav navbar-nav nav-collapse" id="nav-collapseSearch">
            <form className="navbar-form navbar-right" method = "POST" role="search" onSubmit = {this.searchBlood}>
              <div className="form-group">
              <select className="form-control selectDesign parsley-validated" id=" donor-blood" name="bloodNeed" required>
                                            <option value="">-- Select Blood Group --</option>
                                            <option value="a-positive">A+</option>
                                            <option value="a-negative">A-</option>
                                            
                                           
                                            <option value="b-positive">B+</option>
                                            <option value="b-negative">B-</option>
                                           
                                            <option value="o-positive">O+</option>
                                            <option value="o-negative">O-</option>
                                            <option value="ab-positive">AB+</option>
                                            <option value="ab-negative">AB-</option>
                                        </select>
                                        

                                            
                                        
                 {/* <input type="hidden" onClick = {this.googleData} className="form-control  inputStyle" placeholder="Name of your Local Area" />  */}
                {/* <input id="searchArea"  type="text" name="areaNeed" className="form-control selectDesign " placeholder="Your Local Area" required /> */}
               












<select name="areaNeed" id="city_id" className="form-control selectDesign chzn-select parsley-validated" parsley-required="true" >
            <option value="">-- Select City --</option>
    <optgroup label="Popular Cities">
    <option value="Islamabad">Islamabad</option>
<option value="Karachi">Karachi</option>
<option value="Lahore">Lahore</option>
<option value="Peshawar">Peshawar</option>
<option value="Quetta">Quetta</option>
<option value="Rawalpindi">Rawalpindi</option>
<option value="Faisalabad">Faisalabad</option>
    </optgroup>
    <optgroup label="Other Cities">
     <option value="Abbotabad">Abbotabad</option>
<option value="Abdul hakim">Abdul hakim</option>
<option value="Adda jahan khan">Adda jahan khan</option>
<option value="Adda shaiwala">Adda shaiwala</option>
<option value="Akhora khattak">Akhora khattak</option>
<option value="Ali chak">Ali chak</option>
<option value="Allahabad">Allahabad</option>
<option value="Amangarh">Amangarh</option>
<option value="Arif wala">Arif wala</option>
<option value="Arifwala">Arifwala</option>
<option value="Attock">Attock</option>

<option value="Badin">Badin</option>
<option value="Bahawalnagar">Bahawalnagar</option>
<option value="Bahawalpur">Bahawalpur</option>
<option value="Balakot">Balakot</option>
<option value="Bannu">Bannu</option>

<option value="Baroute">Baroute</option>

<option value="Bhai pheru">Bhai pheru</option>
<option value="Bhakkar">Bhakkar</option>
<option value="Bhalwal">Bhalwal</option>
<option value="Bhan saeedabad">Bhan saeedabad</option>
<option value="Bhera">Bhera</option>
<option value="Bhimbar">Bhimbar</option>

<option value="Bhuawana">Bhuawana</option>

<option value="Burewala">Burewala</option>
<option value="Chacklala">Chacklala</option>
<option value="Chaininda">Chaininda</option>

<option value="Chak jamal">Chak jamal</option>
<option value="Chak jhumra">Chak jhumra</option>
<option value="38">Chak sawara</option>
<option value="39">Chak sheza</option>
<option value="40">Chakwal</option>
<option value="41">Charsada</option>
<option value="42">Chashma</option>
<option value="43">Chawinda</option>
<option value="44">Chicha watni</option>
<option value="45">Chiniot</option>
<option value="46">Chishtian</option>
<option value="402">Chitral</option>
<option value="47">Chohar jamali</option>
<option value="48">Choppar hatta</option>
<option value="49">Chowha saidan shah</option>
<option value="50">Chowk azam</option>
<option value="51">Chowk mailta</option>
<option value="52">Chowk munda</option>
<option value="53">Chunian</option>
<option value="54">Dadakhel</option>
<option value="55">Dadu</option>
<option value="56">Daharki</option>
<option value="57">Dandot</option>
<option value="58">Dargai</option>
<option value="59">Darya khan</option>
<option value="60">Daska</option>
<option value="61">Daud khel</option>
<option value="62">Daulat pur</option>
<option value="63">Daur</option>
<option value="64">Deh pathaan</option>
<option value="65">Depal pur</option>
<option value="66">Dera ghazi khan</option>
<option value="67">Dera ismail khan</option>
<option value="68">Dera murad jamali</option>
<option value="69">Dera nawab sahib</option>
<option value="70">Dhatmal</option>
<option value="71">Dhoun kal</option>
<option value="72">Digri</option>
<option value="73">Dijkot</option>
<option value="74">Dina</option>
<option value="75">Dinga</option>
<option value="76">Doaaba</option>
<option value="77">Doltala</option>
<option value="78">Domeli</option>
<option value="79">Dudial</option>
<option value="80">Dunyapur</option>
<option value="81">Eminabad</option>
<option value="82">Estate l.m factory</option>

<option value="84">Farooqabad</option>
<option value="85">Fateh pur</option>
<option value="86">Feroz walla</option>
<option value="87">Feroz watan</option>
<option value="88">Feteh jhang</option>
<option value="89">Fiza got</option>
<option value="90">Gadoon amazai</option>
<option value="91">Gaggo mandi</option>
<option value="92">Gakhar mandi</option>
<option value="93">Gambet</option>
<option value="94">Garh maharaja</option>
<option value="95">Garh more</option>
<option value="96">Gari habibullah</option>
<option value="97">Gari mori</option>
<option value="98">Gawadar</option>
<option value="99">Gharo</option>
<option value="100">Ghazi</option>
<option value="101">Ghotki</option>
<option value="102">Gilgit</option>
<option value="103">Gohar ghoushti</option>
<option value="104">Gojar khan</option>
<option value="105">Gojra</option>
<option value="106">Goular khel</option>
<option value="107">Guddu</option>
<option value="108">Gujjar khan</option>
<option value="109">Gujranwala</option>
<option value="110">Gujrat</option>
<option value="111">Hafizabad</option>
<option value="112">Hala</option>
<option value="113">Hangu</option>
<option value="114">Hari pur</option>
<option value="115">Hariwala</option>
<option value="116">Haroonabad</option>
<option value="117">Hasilpur</option>
<option value="118">Hassan abdal</option>
<option value="119">Hattar</option>
<option value="120">Hattian lawrencepur</option>
<option value="121">Haveli lakha</option>
<option value="122">Havelian</option>
<option value="123">Hayatabad</option>
<option value="124">Hazro</option>
<option value="125">Head marala</option>
<option value="126">Hub inds estate</option>
<option value="127">Hyderabad</option>
<option value="128">Issa khel</option>
<option value="129">Jaccobabad</option>
<option value="130">Jaja abasian</option>
<option value="131">Jalal pur jatan</option>
<option value="132">Jalal pur priwala</option>
<option value="133">Jampur</option>
<option value="134">Jamrud road</option>
<option value="135">Jamshoro</option>
<option value="136">Jan pur</option>
<option value="137">Jandanwala</option>
<option value="138">Jaranwala</option>
<option value="139">Jauharabad</option>
<option value="140">Jehangira</option>
<option value="141">Jehanian</option>
<option value="142">Jehlum</option>
<option value="403">Jhal Magsi</option>
<option value="143">Jhand</option>
<option value="144">Jhang</option>
<option value="145">Jhatta bhutta</option>
<option value="146">Jhelum</option>
<option value="147">Jhudo</option>
<option value="148">Joharabad</option>
<option value="149">Kabir wala</option>
<option value="150">Kacha khooh</option>
<option value="151">Kahuta</option>
<option value="152">Kakul</option>
<option value="153">Kakur town</option>
<option value="154">Kala bagh</option>
<option value="155">Kala shah kaku</option>
<option value="156">Kalar syedian</option>
<option value="157">Kalaswala</option>
<option value="158">Kallur kot</option>
<option value="159">Kamalia</option>
<option value="160">Kamalia musa</option>
<option value="161">Kamber ali khan</option>
<option value="162">Kamokey</option>
<option value="163">Kamra</option>
<option value="164">Kandh kot</option>
<option value="165">Kandiaro</option>
<option value="166">Karak</option>
<option value="167">Karoor pacca</option>
<option value="168">Karore lalisan</option>
<option value="169">Kashmir</option>
<option value="170">Kashmore</option>
<option value="171">Kasur</option>
<option value="172">Kazi ahmed</option>
<option value="173">Khair pur</option>
<option value="174">Khair pur mir</option>
<option value="175">Khairpur nathan shah</option>
<option value="176">Khan qah sharif</option>
<option value="177">Khanbel</option>
<option value="178">Khandabad</option>
<option value="179">Khanewal</option>
<option value="180">Khangarh</option>
<option value="181">Khanqah dogran</option>
<option value="182">Khanqah sharif</option>
<option value="183">Kharian</option>
<option value="184">Khewra</option>
<option value="185">Khoski</option>
<option value="186">Khurian wala</option>
<option value="187">Khushab</option>
<option value="188">Khushal kot</option>
<option value="189">Khuzdar</option>
<option value="190">Kohat</option>
<option value="191">Kot addu</option>
<option value="192">Kot bunglow</option>
<option value="193">Kot ghulam mohd</option>
<option value="194">Kot mithan</option>
<option value="195">Kot radha kishan</option>
<option value="196">Kotla</option>
<option value="197">Kotla arab ali khan</option>
<option value="198">Kotla jam</option>
<option value="199">Kotla patdan</option>
<option value="200">Kotli loharan</option>
<option value="201">Kotri</option>
<option value="202">Kumbh</option>
<option value="203">Kundina</option>
<option value="204">Kunjah</option>
<option value="205">Kunri</option>
<option value="206">Laki marwat</option>
<option value="207">Lala musa</option>
<option value="208">Lala rukh</option>
<option value="209">Laliah</option>
<option value="210">Lalshanra</option>
<option value="211">Larkana</option>
<option value="404">Lasbella</option>
<option value="212">Lawrence pur</option>
<option value="213">Layyah</option>
<option value="214">Liaquat pur</option>
<option value="215">Lodhran</option>
<option value="216">Ludhan</option>
<option value="217">Machi goth</option>
<option value="218">Madina</option>
<option value="219">Mailsi</option>
<option value="220">Makli</option>
<option value="221">Malakwal</option>
<option value="222">Mamu kunjan</option>
<option value="223">Mandi bahauddin</option>
<option value="224">Mandra</option>
<option value="225">Manga mandi</option>
<option value="226">Mangal sada</option>
<option value="227">Mangi</option>
<option value="228">Mangla</option>
<option value="229">Mangowal</option>
<option value="230">Manoabad</option>
<option value="231">Manshera</option>
<option value="232">Mardan</option>
<option value="233">Mari indus</option>
<option value="234">Mastoi</option>
<option value="235">Matiari</option>
<option value="236">Matli</option>
<option value="237">Mehar</option>
<option value="238">Mehmood kot</option>
<option value="239">Mehrab pur</option>
<option value="240">Mian chunnu</option>
<option value="241">Mian Walli</option>
<option value="242">Mingora</option>
<option value="243">Mir ali</option>
<option value="244">Miran shah</option>
<option value="245">Mirpur</option>
<option value="246">Mirpur khas</option>
<option value="247">Mirpur mathelo</option>
<option value="248">Mohen jo daro</option>
<option value="249">More kunda</option>
<option value="250">Morgah</option>
<option value="251">Moro</option>
<option value="252">Mubarik pur</option>
<option value="253">Multan</option>
<option value="254">Muridkay</option>
<option value="255">Murree</option>
<option value="256">Musafir khana</option>
<option value="257">Mustung</option>
<option value="258">Muzaffarabad</option>
<option value="259">Muzaffargarh</option>
<option value="260">Nankana sahib</option>
<option value="261">Narang mandi</option>
<option value="262">Narowal</option>
<option value="263">Naseerabad</option>
<option value="264">Naudero</option>
<option value="265">Naukot</option>
<option value="266">Naukundi</option>
<option value="267">Nawab shah</option>
<option value="268">New saeedabad</option>
<option value="269">Nilore</option>
<option value="270">Noor kot</option>
<option value="271">Noorpur nooranga</option>
<option value="272">Nowshera</option>
<option value="273">Nowshera cantt</option>
<option value="274">Nowshero peroz</option>
<option value="275">Okara</option>
<option value="401">Other</option>
<option value="276">Padidan</option>
<option value="277">Pak china fertilizer</option>
<option value="278">Pak pattan sharif</option>
<option value="279">Panjan kisan</option>
<option value="280">Panjgoor</option>
<option value="281">Pannu aqil</option>
<option value="282">Pasni</option>
<option value="283">Pasroor</option>
<option value="284">Patoki</option>
<option value="286">Phagwar</option>
<option value="287">Phalia</option>
<option value="288">Phool nagar</option>
<option value="289">Piaro goth</option>
<option value="290">Pindi bhohri</option>
<option value="291">Pindi dadan khan</option>
<option value="292">Pindi gheb</option>
<option value="293">Pir mahal</option>
<option value="294">Pishin</option>
<option value="295">Qalandarabad</option>
<option value="296">Qasba gujrat</option>
<option value="297">Qazi ahmed</option>
<option value="298">Quaidabad</option>
<option value="300">Rabwah</option>
<option value="301">Rahimyar khan</option>
<option value="302">Rahwali</option>
<option value="303">Raiwand</option>
<option value="304">Rajana</option>
<option value="305">Rajanpur</option>
<option value="306">Rangoo</option>
<option value="307">Ranipur</option>
<option value="308">Ratto dero</option>
<option value="309">Rawala kot</option>
<option value="311">Rawat</option>
<option value="312">Renala khurd</option>
<option value="313">Risalpur</option>
<option value="314">Rohri</option>
<option value="315">Sadiqabad</option>
<option value="316">Sagri</option>
<option value="317">Sahiwal</option>
<option value="318">Saidu sharif</option>
<option value="319">Sajawal</option>
<option value="320">Sakrand</option>
<option value="321">Samanabad</option>
<option value="322">Sambrial</option>
<option value="323">Samma satta</option>
<option value="324">Samundri</option>
<option value="325">Sanghar</option>
<option value="326">Sanghi</option>
<option value="327">Sangla hill</option>
<option value="328">Sangote</option>
<option value="329">Sanjwal</option>
<option value="330">Sara e alamgir</option>
<option value="331">Sara e naurang</option>
<option value="332">Sargodha</option>
<option value="333">Satyana bangla</option>
<option value="334">Sehar baqlas</option>
<option value="335">Serai alamgir</option>
<option value="336">Shadiwal</option>
<option value="337">Shah kot</option>
<option value="338">Shahdad kot</option>
<option value="339">Shahdad pur</option>
<option value="340">Shahpur chakar</option>
<option value="341">Shaikhupura</option>
<option value="342">Shamsabad</option>
<option value="343">Shankiari</option>
<option value="344">Shedani sharif</option>
<option value="345">Sheikhupura</option>
<option value="346">Shemier</option>
<option value="347">Shikar pur</option>
<option value="348">Shorkot</option>
<option value="349">Shujabad</option>
<option value="350">Sialkot</option>
<option value="351">Sibi</option>
<option value="352">Sihala</option>
<option value="353">Sikandarabad</option>
<option value="354">Silanwala</option>
<option value="355">Sita road</option>
<option value="356">Skardu</option>
<option value="357">Sohawa district daska</option>
<option value="358">Sohawa district jelum</option>
<option value="359">Sukkur</option>
<option value="360">Swabi</option>
<option value="361">Swatmingora</option>
<option value="362">Takhtbai</option>
<option value="363">Talagang</option>
<option value="364">Talamba</option>
<option value="365">Talhur</option>
<option value="366">Tando adam</option>
<option value="367">Tando allahyar</option>
<option value="368">Tando jam</option>
<option value="369">Tando mohd khan</option>
<option value="370">Tank</option>
<option value="371">Tarbela</option>
<option value="372">Tarmatan</option>
<option value="373">Taunsa sharif</option>
<option value="374">Taxila</option>
<option value="375">Tharo shah</option>
<option value="376">Thatta</option>
<option value="377">Theing jattan more</option>
<option value="378">Thull</option>
<option value="379">Tibba sultanpur</option>
<option value="380">Tobatek singh</option>
<option value="381">Topi</option>
<option value="382">Toru</option>
<option value="383">Trinda mohd pannah</option>
<option value="384">Turbat</option>
<option value="385">Ubaro</option>
<option value="386">Ugoki</option>
<option value="387">Ukba</option>
<option value="388">Umar kot</option>
<option value="389">Upper deval</option>
<option value="390">Usta mohammad</option>
<option value="391">Vehari</option>
<option value="392">Village Sunder</option>
<option value="393">Wah cantt</option>
<option value="394">Wahi hassain</option>
<option value="395">Wan radha ram</option>
<option value="396">Warah</option>
<option value="397">Warburton</option>
<option value="398">Wazirabad</option>
<option value="399">Yazman mandi</option>
<option value="400">Zahir pir</option>
    </optgroup>
        </select>











              </div>
              <button type="submit" className="btn btn-danger btnIconDesign"><span className="glyphicon glyphicon-search" ></span></button>
            </form>
          </div>
        </div>            
      </div>
      </div>
    </nav>
    </div>




            

        );
    }
}
export default withRouter(Navbarr);