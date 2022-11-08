import React from 'react'

function About_section() {
  return (
    <section className="my-5">
        <h2 className="fs-1 fw-bold text-center my-4"><span className="text-primary">About</span> Us</h2>
        <div className="container">
          <div className="back rounded-3 shadow p-3" style={{height: '400px'}}>
            <div className="w-50 float-end  me-5 p-5">
              <h3 className="text-center"> <span className="text-primary">S</span>ell , <span className="text-primary">B</span>uy &amp; <span className="text-primary">E</span>xchange</h3>
              <p className=" mt-5 fw-semibold"><span className="text-primary">L</span>orem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia expedita sequi, 
                fugit, eos sunt qui nisi laborum quo soluta perferendis, 
                quisquam minima. Minima eligendi nemo rerum. Id doloribus possimus dolorum.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About_section