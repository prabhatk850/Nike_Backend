const bodyParser = require("body-parser")
const express = require("express")
const router=express.Router()
const {addproduct,viewproduct}=require("../Controller/Product")
const {addsidebar, viewSidebar}=require("../Controller/Sidebar")
const { addDropdown, ViewDropDown } = require("../Controller/Dropdown")
const { SignUp, SignIn, userExist } = require("../Controller/Auth")
const { getUserData } = require("../Controller/UserProfile")
const { authTokenCheck } = require("../Middleware/Middleware")
const { updateProfile } = require("../Controller/UserProfile")
const { updateAddress } = require("../Controller/Addre")
const { getUserAddress } = require("../Controller/UserProfile")


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json())
router.route("/addproduct").post(addproduct)
router.route("/viewproduct").get(viewproduct)

router.route("/addSidebar").post(addsidebar)
router.route("/viewSidebar").get(viewSidebar)

router.route("/addDropDown").post(addDropdown)
router.route("/viewDropDown").get(ViewDropDown)

router.route("/signup").post(SignUp)
router.route("/signIn").post(SignIn)
router.route("/checkuser").post(userExist)

router.route("/getUserData").get(getUserData)
router.route("/getUserAddress").get(authTokenCheck,getUserAddress)
router.route("/updateProfile").put(authTokenCheck,updateProfile)

router.route("/updateAddress").post(authTokenCheck,updateAddress)




module.exports=router