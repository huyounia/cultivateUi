<!--404找不到页面提示页-->
<template>
    <span class="page-container">
        <p><br/><br/><br/><br/><br/><br/><br/><br/><span style="font-size:50px;">404 您访问的页面不存在</span><br/><br/><router-link :to="{ path: 'login' }" style="text-align:center;">返回登录页</router-link></p>
    </span>
</template>

<style>
    .page-container {
        font-size: 20px;
        text-align: center;
        color: rgb(192, 204, 218);
    }
</style>
