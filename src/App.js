import "./App.css";
import Bezier from "./previews/Bezier.png";
import Circle_Illusion from "./previews/Circle_Illusion.png";
import Clock_V2 from "./previews/Clock_V2.png";
import Color_CMYK_RGB from "./previews/Color_CMYK_RGB.png";
import Distance_Optimization from "./previews/Distance_Optimization.png";
import Distance_Optimization_V3 from "./previews/Distance_Optimization_V3.png";
import Factoring from "./previews/Factoring.png";
import Jump from "./previews/Jump.png";
import Lagrange_Polynomials from "./previews/Lagrange_Polynomials.png";
import Lagrange_Taylor_Approximation from "./previews/Lagrange_Taylor_Approximation.png";
import Lambert from "./previews/Lambert.png";
import N_Degree_Loose_Interpolation from "./previews/N_Degree_Loose_Interpolation.png";
import Nth_Side_Regular_Polygon from "./previews/Nth_Side_Regular_Polygon.png";
import Parabolic_Curve_Fitting from "./previews/Parabolic_Curve_Fitting.png";
import Parametric_Coefficient_Gradient from "./previews/Parametric_Coefficient_Gradient.png";
import Projectile_Motion_Air_Resistance from "./previews/Projectile_Motion_Air_Resistance.png";
import Riemann_Sums_Better from "./previews/Riemann_Sums_Better.png";
import Rolling_Ellipse from "./previews/Rolling_Ellipse.png";
import Torque from "./previews/Torque.png";
import Trajectory from "./previews/Trajectory.png";
import Trig_Intuition from "./previews/Trig_Intuition.png";
import Unfinished_Game from "./previews/Unfinished_Game.png";
import Yes from "./previews/Yes.png";
import DecimalToFractionConverter from "./previews/DecimalToFractionConverter.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">Demsos, Enjoy :)</header>
      <body class="Body">
        <ul class="previews">
          <div class="image">
            <div class="overlay">
            <div class='description'>Manipulates the straight line between two points using two input handles in order to form a specific parametric function.</div>
              <a href="https://www.desmos.com/calculator/pe3vclwjxr" target="_blank" rel="noreferrer">
                Bezier Curve
              </a>
            </div>
            <img src={Bezier}></img>
          </div>

          <div class="image">
            <div class="overlay">
            <div class='description'>Exaggerates the illusion of a circle rolling around another circle by moving N amount of points along their respective straight lines throughout a circle.</div>
              <a href="https://www.desmos.com/calculator/wymcboh9vt" target="_blank" rel="noreferrer">
                Circle Illusion
              </a>
            </div>
            <img src={Circle_Illusion}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Clean "trig" clock that operates counter-clockwise and starts from the right. Easily readable and synchronized with the current time.</div>
              <a href="https://www.desmos.com/calculator/zikfbnuyym" target="_blank" rel="noreferrer">
                Clock
              </a>
            </div>
            <img src={Clock_V2}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Input an arbitrary color using CMYK and two points (from their x and y coordinates) and outputs an approximation for a color (the shaded region) in RGB.</div>
              <a href="https://www.desmos.com/calculator/k87jediuxs" target="_blank" rel="noreferrer">
                RGB to CMYK Converter
              </a>
            </div>
            <img src={Color_CMYK_RGB}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Draws the shortest line between a single point and an arbitrary function of x.</div>
              <a href="https://www.desmos.com/calculator/ekz1idjpzu" target="_blank" rel="noreferrer">
                Distance Optimization
              </a>
            </div>
            <img src={Distance_Optimization}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Draws the shortest line and smallest circle between multiple points and an arbitrary function of x in a continuous, seamless, loop.</div>
              <a href="https://www.desmos.com/calculator/q7ntzz2a7h" target="_blank" rel="noreferrer">
                Distance Optimization v3
              </a>
            </div>
            <img src={Distance_Optimization_V3}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Factors an arbitrary positive integer into its prime components.</div>
              <a href="https://www.desmos.com/calculator/ch97ekpd1r" target="_blank" rel="noreferrer">
                Factoring
              </a>
            </div>
            <img src={Factoring}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Scalable animation of projectile motion without air resistance.</div>
              <a href="https://www.desmos.com/calculator/3mz4ltmemc" target="_blank" rel="noreferrer">
                Jump
              </a>
            </div>
            <img src={Jump}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Given 10 arbitrary points, approximates a polynomial of the lowest degree that satisfies the points.</div>
              <a href="https://www.desmos.com/calculator/8au51wfm4f" target="_blank" rel="noreferrer">
                Lagrange Polynomials
              </a>
            </div>
            <img src={Lagrange_Polynomials}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Compares the accuracy between Lagrange and Taylor approximations of an arbitrary function of x at specified degrees.</div>
              <a href="https://www.desmos.com/calculator/2fcvyis6hj" target="_blank" rel="noreferrer">
                Lagrange vs Taylor Approximation
              </a>
            </div>
            <img src={Lagrange_Taylor_Approximation}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Models the 2 real branches of the Lambert W Function.</div>
              <a href="https://www.desmos.com/calculator/utjnbp65cd" target="_blank" rel="noreferrer">
                2 Branch Lambert
              </a>
            </div>
            <img src={Lambert}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Approximates a given function by a specified degree, n, using a line of best fit and Lagrangian polynomials.</div>
              <a href="https://www.desmos.com/calculator/xtvutza4qa" target="_blank" rel="noreferrer">
                Nth Degree Loose Interpolation
              </a>
            </div>
            <img src={N_Degree_Loose_Interpolation}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Forms a polygon of N sides inscribed within a circle and shows how as N approaches infinity, the area of the polygon approaches the area of the circle.</div>
              <a href="https://www.desmos.com/calculator/jkri6qapua" target="_blank" rel="noreferrer">
                Nth Side Regular Polygon
              </a>
            </div>
            <img src={Nth_Side_Regular_Polygon}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Depicting the steps for solving a triple system of equations and fitting the parabola bound by 3 points.</div>
              <a href="https://www.desmos.com/calculator/gnjip9oga1" target="_blank" rel="noreferrer">
                Parabolic Curve Fitting
              </a>
            </div>
            <img src={Parabolic_Curve_Fitting}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Multiplies various coefficients by arbitrary parametric of functions of x to form a "gradient".</div>
              <a href="https://www.desmos.com/calculator/flo1azlbtv" target="_blank" rel="noreferrer">
                Parametric Coefficient Gradient
              </a>
            </div>
            <img src={Parametric_Coefficient_Gradient}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Projectile Motion influenced by linear air resistance with visuals depicting the various forces, velocities, and distances involved compared to projectile motion without air resistance.</div>
              <a href="https://www.desmos.com/calculator/el8st6itre" target="_blank" rel="noreferrer">
                Projectile Motion Air Resistance
              </a>
            </div>
            <img src={Projectile_Motion_Air_Resistance}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Approximates the integral of an arbitrary function of x by various Reimann sum methods with neat visuals.</div>
              <a href="https://www.desmos.com/calculator/ilewjqqtcv" target="_blank" rel="noreferrer">
                Riemann Sums
              </a>
            </div>
            <img src={Riemann_Sums_Better}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Rolls an ellipse along the x-axis without slipping.</div>
              <a href="https://www.desmos.com/calculator/ibs4ienem2" target="_blank" rel="noreferrer">
                Rolling Ellipse
              </a>
            </div>
            <img src={Rolling_Ellipse}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Automatically balances a "lever" with constant mass and two points of mass. Lever does not automatically adjust its length.</div>
              <a href="https://www.desmos.com/calculator/69h64ybyji" target="_blank" rel="noreferrer">
                Torque Calculator
              </a>
            </div>
            <img src={Torque}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Models projectile motion influenced by Quadratic Drag with bounce mechanics.</div>
              <a href="https://www.desmos.com/calculator/tkhgqxg0su" target="_blank" rel="noreferrer">
                Trajectory
              </a>
            </div>
            <img src={Trajectory}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Splits the x and y components of a unit circles using trigonometric functions.</div>
              <a href="https://www.desmos.com/calculator/3ruskb90gh" target="_blank" rel="noreferrer">
                Trig Intuition
              </a>
            </div>
            <img src={Trig_Intuition}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Plays a small game that as of right now does not have working obstacle colliders, but does end the game when you hit the ceiling and roof.</div>
              <a href="https://www.desmos.com/calculator/khqsimx8kf" target="_blank" rel="noreferrer">
                Unfinished Game
              </a>
            </div>
            <img src={Unfinished_Game}></img>
          </div>
          <div class="image">
            <div class="overlay">
              <div class='description'>Interesting art depicting the similarities between a circle and a parabola.</div>
              <a href="https://www.desmos.com/calculator/xoz1m3bte1" target="_blank" rel="noreferrer">
                Art Thing
              </a>
            </div>
            <img src={Yes}></img>
          </div>
          <div class="image">
            <div class="overlay">
            <div class='description'>Converts a given decimal to its simplified and equivalent fraction.</div>
              <a href="https://www.desmos.com/calculator/ho4s8ieuck" target="_blank" rel="noreferrer">
                Decimal To Fraction Converter
              </a>
            </div>
            <img src={DecimalToFractionConverter}></img>
          </div>
        </ul>
      </body>
    </div>
  );
}

export default App;
