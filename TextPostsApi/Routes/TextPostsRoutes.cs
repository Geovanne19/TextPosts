namespace TextPostsApi.Routes;

public static class PersonRoute 
{
    public static void TextPostsApiRoutes(this WebApplication app){
        app.MapGet("person", () => "Olá pessoa");
    }
}