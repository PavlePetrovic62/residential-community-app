var builder = WebApplication.CreateBuilder(args);

var frontendOrigin = "frontendOrigin";
builder.Services.AddCors(options =>
{
    options.AddPolicy(frontendOrigin,
                          policy =>
                          {
                              policy.WithOrigins("http://localhost:3000")
                                                  .AllowAnyHeader()
                                                  .AllowAnyMethod();
                          });
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(frontendOrigin);

app.UseAuthorization();

app.MapControllers();

app.Run();
