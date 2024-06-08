function DonateNow(){
    return <center><div>
            <div style={{width:'50%'}}>
                <h2>RAISE FUNDS</h2>
                <h5>We have raised fund of  </h5>
                <span><strong><i class="fa fa-dollar"></i>3,10,345 </strong></span>
                <h5>but for this year we require</h5>
                <span><strong><i class="fa fa-dollar"></i>3,90,000 </strong></span>
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" required="required" placeholder="Your Email"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" required="required" placeholder="Donation Amount"/>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-style-1 btn-lg ">DONATE NOW</button>
                    </div>

                </form>
                </div>
    </div>
    </center>
}
export default DonateNow;