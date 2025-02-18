import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import img from "./assets/prudential.png";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TiMessages } from "react-icons/ti";
import { CiCreditCard1 } from "react-icons/ci";
export default function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg container-fluid nv-hd ">
        <div class="container">
          <img class="image" src={img} alt="" />
          <div class="dissapear">
            <div class=" d-flex align-items-center">
              <HiMagnifyingGlass className="mag" />
              <TiMessages className="msg" />
              <div class="d-flex align-items-center ">
                <CiCreditCard1 className="crd" />
                <div className="txt">Online Payments</div>
                <div class="d-flex " className="click">
                  <a class="indv" href="">
                    Individual
                  </a>
                  <a class="co-p" href="">
                    Cooperate
                  </a>
                </div>
                <button>Login</button>
              </div>
            </div>
          </div>

          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            <img src={img} alt="" />
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-2 pe-3">
            <div class="btn-group">
              <div
                type="button"
                class=" container-fluid  dropdown-toggle btn-chng"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Life Simulator
              </div>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"></hr>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <div
                type="button"
                class="container-fluid  dropdown-toggle btn-chng"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Buy a policy
              </div>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"></hr>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <div
                type="button"
                class="container-fluid  dropdown-toggle btn-chng"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Buy a policy
              </div>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"></hr>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <div
                type="button"
                class="container-fluid  dropdown-toggle btn-chng"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Make a claim
              </div>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"></hr>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <div
                type="button"
                class="container-fluid  dropdown-toggle btn-chng"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Talk to an adviser
              </div>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"></hr>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>

      <div class="dissapear row hgh-nav">
        <div class="col-1"></div>
        <div class=" navbar col-10    ms-2  pt-4 pb-4 mt-3 rounded-start rounded-end low-nav">
          <li>Life stimulator</li>
          <li>Buy a policy</li>
          <li>Make a claim</li>
          <li>Talk to an Adviser</li>
          <li>About PZL</li>
          <li>Readers digest</li>
        </div>
        <div class="col-1"></div>
      </div>

      <div className="test"></div>
    </>
  );
}
