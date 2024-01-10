
import Form from 'react-bootstrap/Form';
import { Card, Container, Row, Col } from 'react-bootstrap'
import './styles.scss'
import Button from 'react-bootstrap/Button';
import {User} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';
//import { loginActionCreator, resetPasswordActionCreator } from '../reducers/userReducer';
//import {useNavigate } from 'react-router'

function Login() {

  // const dispatch = useDispatch();

  // const navigate = useNavigate();

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [otp, setOTP] = useState(null);
  // const [showRestForm, setShowRestForm] = useState(false);

  // const { username: isLoggedIn } = useSelector(({ user }) => user);

  // const {success } = useSelector(({ user }) => user);


  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate(-1);
  //   }

  // }, [isLoggedIn,navigate]);


  // useEffect(() => {
  //   if (showRestForm && success) {
  //     setShowRestForm(false);
  //   }

  // }, [success, showRestForm]);



  // const ENTER_KEY_CODE = 13;

  // const updateState = (e, fn) => {
  //   fn(e.target.value);
  // }

  // const isFormValid = username && password;

  // const onLogin = async () => {
  //   try {
  //     if (!isFormValid) return;
  //     const payload = { username, password };
  //     dispatch(loginActionCreator(payload))
  //     // const data = (await loginApi(payload)).data
  //     // console.log('loginData',data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const passwordReset = async () => {
  //   try {
  //     if (!otp || !isFormValid) return;
  //     const payload = { username, password, otp };
  //     dispatch(resetPasswordActionCreator(payload))
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const onKeyUp = (e) => {
  //   // console.log(e);
  //   if (e.keyCode === ENTER_KEY_CODE) {
  //     console.log('Enter key pressed');
  //     onLogin()
  //     // trigger submit
  //   }
  // }

  return (
    <Container>
    
      <Row>
        <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }} sm={{ span: 10, offset: 1 }}>
          <Card className=' signup'>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>username</Form.Label>
                  <Form.Control placeholder="Enter username"  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"
                    />
                    <Button className='btn-login'>LOGIN</Button>
                 
                </Form.Group>
                <Link to="Signup"> <div>  New user Registration </div></Link>
               


              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login