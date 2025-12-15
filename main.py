"""
SparkFleet Smart Meeting Assistant - Main Application Entry Point
"""
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import structlog
import uvicorn

from config import settings
from app.api.v1 import api_router
from app.core.logging import setup_logging
from app.database import engine, Base

# Setup structured logging
setup_logging()
logger = structlog.get_logger()

# Initialize FastAPI application
app = FastAPI(
    title="SparkFleet Smart Meeting Assistant API",
    description="Automated meeting transcription, summarization, and action item tracking",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_event():
    """Initialize application on startup"""
    logger.info("Starting SparkFleet Smart Meeting Assistant API")
    
    # TODO: Initialize database tables
    # Base.metadata.create_all(bind=engine)
    
    # TODO: Initialize background task queues (Celery workers)
    
    # TODO: Verify external API connections (Zoom, Google, GitHub, Slack)
    
    # TODO: Load AI models or pre-warm connections
    
    logger.info("Application startup complete")


@app.on_event("shutdown")
async def shutdown_event():
    """Cleanup on application shutdown"""
    logger.info("Shutting down SparkFleet Smart Meeting Assistant API")
    
    # TODO: Close database connections
    
    # TODO: Stop background workers gracefully
    
    # TODO: Cleanup temporary files and recordings


@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    """Global exception handler"""
    logger.error("Unhandled exception", exc_info=exc)
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal server error", "error": str(exc)}
    )


# Include API routes
app.include_router(api_router, prefix="/api/v1")


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "environment": settings.app_env,
        "version": "1.0.0"
    }


if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host=settings.api_host,
        port=settings.api_port,
        reload=settings.app_env == "development",
        log_level=settings.log_level.lower()
    )
