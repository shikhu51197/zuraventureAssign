import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import BreadCrumbNav from "../components/BreadCrumbNav";
import { useDispatch, useSelector } from "react-redux";
import SideBarNav from "../components/SideBarNav";
import { useParams } from "react-router-dom";
import { funChangeUserDetail } from "../redux/actions";

const UserSettings = () => {
  const { project_id } = useParams();
  const { current_user } = useSelector((store) => store);
  const [avatarImage, setAvatarImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRfNdB9dzu-RcfNl-jY-KBXoBBHYjqEWETfRh_YVZ4YLuZX_8ghDGRbybruF7nnEu8Hc&usqp=CAU"
  );
  const nameRef = useRef();
  const avatarRef = useRef();
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImage = async () => {
    let file = avatarRef.current.files[0];
    if (file) {
      let form = new FormData();
      form.append("image", file);
      let res = await fetch(
        `https://api.imgbb.com/1/upload?key=00fd0e9325f14196304aa8c8afba62b8`,
        {
          method: `POST`,
          body: form,
        }
      );
      let data = await res.json();
      let img_url = data.data.display_url;
      return img_url;
    }else{
      return 0;
    }
  };

  const changeUserData = async () => {
    let img_link = await handleImage();
    let changeBody = {};
    if (current_user.user_name !== nameRef.current.value) {
      changeBody.user_name = nameRef.current.value;
    }
    if (img_link) {
      changeBody.user_avatar = img_link;
    }
    if (Object.keys(changeBody).length) {
      dispatch(funChangeUserDetail(current_user._id, changeBody));
    }
  };

  return (
    <Box>
      <SideBarNav project_id={project_id} />
      <Box p={7} ml={{ base: "full", md: 80 }}>
        <BreadCrumbNav
          project_id={project_id}
          currentPage={"Account Settings"}
          notSettingPage={false}
        />
        <Heading color={"var(--primary-color)"} mb={7} textAlign={"left"}>
          Account Settings
        </Heading>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"3rem"}
        >
          <Box position={"relative"}>
            <Avatar
              src={current_user?.user_avatar ?  current_user?.user_avatar : avatarImage }
              size={{ base: "lg", sm: "xl", md: "2xl" }}
            ></Avatar>
            <FormLabel
              border={"1px solid black"}
              textAlign={"center"}
              m={"auto"}
              mt={"3px"}
              borderRadius={"8px"}
              width={"70%"}
              bgColor={"black"}
              color={"white"}
              htmlFor="input_image"
            >
              choose
            </FormLabel>
            <Input
              ref={avatarRef}
              display={"none"}
              id="input_image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Box>
          <FormControl>
            <FormLabel>User Name</FormLabel>
            <Input
              type="text"
              border={"1px solid black"}
              defaultValue={current_user?.user_name}
              required={true}
              ref={nameRef}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              border={"1px solid black"}
              type="email"
              value={current_user?.user_email}
              required={true}
              isReadOnly={true}
            />
          </FormControl>
        </Flex>
        <Button onClick={changeUserData}>Save Changes</Button>
        <Heading color={"var(--primary-color)"} my={7} textAlign={"left"}>
          Subscriptions
        </Heading>
        <Flex
          justifyContent={"space-between"}
          bgColor={"var(--primary-color)"}
          py={5}
          px={7}
          borderRadius={"12px"}
        >
          <Text alignSelf={"center"} color={"white"} fontSize={"1.3rem"}>
            You are currently on the Ques AI Basic Plan
          </Text>
          <Button color={"var(--primary-color)"}>Upgrade</Button>
        </Flex>
        <Text
          display={"block"}
          textAlign={"left"}
          mt={"12px"}
          color={"red"}
          as={"u"}
        >
          Cancel Subscription
        </Text>
      </Box>
    </Box>
  );
};

export default UserSettings;
